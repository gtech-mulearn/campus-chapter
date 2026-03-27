import { useState, useEffect } from 'react';
import { TeamMember } from '../data/teamData';
import { getTeamMembers } from '../services/googleSheets';

interface UseTeamMembersReturn {
  teamMembers: TeamMember[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Cache the team members data globally
let cachedTeamMembers: TeamMember[] | null = null;
let cachePromise: Promise<TeamMember[]> | null = null;

export const useTeamMembers = (): UseTeamMembersReturn => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(cachedTeamMembers || []);
  const [loading, setLoading] = useState(!cachedTeamMembers);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      // Only set loading to true if we don't have cached data
      if (!cachedTeamMembers) {
        setLoading(true);
      }
      setError(null);
      
      // Try to fetch from Google Sheets first (NO FALLBACK)
      const members = await getTeamMembers(false);
      cachedTeamMembers = members;
      setTeamMembers(members);
      console.log('Successfully loaded team members from Google Sheets');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch team members';
      setError(errorMessage);
      console.error('Error fetching team members:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = async () => {
    setLoading(true);
    await fetchData();
  };

  useEffect(() => {
    let mounted = true;
    
    // If we already have cached data, use it immediately
    if (cachedTeamMembers) {
      setTeamMembers(cachedTeamMembers);
      setLoading(false);
      return;
    }

    // If cache promise exists, reuse it
    if (cachePromise) {
      cachePromise
        .then(members => {
          if (mounted) {
            setTeamMembers(members);
            setLoading(false);
          }
        })
        .catch(err => {
          if (mounted) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch team members';
            setError(errorMessage);
            setLoading(false);
            console.error('Google Sheets fetch failed:', err);
          }
        });
      return;
    }
    
    const loadData = async () => {
      try {
        // Try to fetch from Google Sheets (NO FALLBACK)
        cachePromise = getTeamMembers(false);
        const members = await cachePromise;
        cachedTeamMembers = members;
        
        if (mounted) {
          setTeamMembers(members);
          setLoading(false);
          console.log('Successfully loaded team members from Google Sheets');
        }
      } catch (err) {
        if (mounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to fetch team members';
          setError(errorMessage);
          setLoading(false);
          console.error('Google Sheets fetch failed:', err);
        }
      } finally {
        cachePromise = null;
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    teamMembers,
    loading,
    error,
    refetch
  };
};