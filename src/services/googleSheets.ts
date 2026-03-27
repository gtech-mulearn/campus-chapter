import { TeamMember, SocialLink } from '../data/teamData';

// Direct Google Sheets URL (published as CSV)
const SPREADSHEET_ID = '1acu2AnsIu-4I76I-Pkg0xwTQV_mSQMlrft-oZ8fpJmA';
const SHEET_GID = '0'; // First sheet, change if needed
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}`;

/**
 * Parse CSV data
 */
const parseCSV = (text: string): string[][] => {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentCell += '"';
      i++; // Skip next quote
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell);
      currentCell = '';
    } else if (char === '\n' && !insideQuotes) {
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = '';
    } else if (char === '\r' && nextChar === '\n' && !insideQuotes) {
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = '';
      i++; // Skip \n
    } else {
      currentCell += char;
    }
  }

  // Push last cell and row if exists
  if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }

  return rows;
};

/**
 * Fetches team members from Google Sheets
 * Sheet structure: ID, Name, Batch, Gender, Position, Team, Added, Email, Phone, Photo, Instagram, LinkedIn, Github, MuID
 * @param forceRefresh - If true, bypasses cache and fetches fresh data (reserved for future use)
 * @returns Array of team members
 */
export const getTeamMembers = async (forceRefresh: boolean = false): Promise<TeamMember[]> => {
  // forceRefresh parameter reserved for future cache implementation
  void forceRefresh;

  try {
    const response = await fetch(SHEET_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);
    
    // Debug: Log the header row to see column structure
    if (rows.length > 0) {
      console.log('CSV Headers:', rows[0]);
      console.log('Number of columns:', rows[0].length);
    }
    
    if (rows.length < 2) {
      throw new Error('No data found in the sheet');
    }

    // Parse the data (skip headers row)
    // Headers: ID, Name, Batch, Gender, Position, Team, Added, Email, Phone, Photo, Instagram, LinkedIn, Github, MuID
    const dataRows = rows.slice(1);

    // Map the rows to TeamMember objects
    const teamMembers: TeamMember[] = dataRows
      .filter(row => row.length > 0 && row[0]?.trim()) // Filter out empty rows
      .map(row => {
        const socialLinks: SocialLink[] = [];
        
        // Instagram (column 10, index 10)
        if (row[10]?.trim()) {
          const instagramValue = row[10].trim();
          socialLinks.push({
            name: 'Instagram',
            url: instagramValue.startsWith('http') ? instagramValue : `https://instagram.com/${instagramValue.replace('@', '')}`,
            icon: 'instagram',
            color: '#E4405F'
          });
        }
        
        // LinkedIn (column 11, index 11)
        if (row[11]?.trim()) {
          const linkedinValue = row[11].trim();
          socialLinks.push({
            name: 'LinkedIn',
            url: linkedinValue.startsWith('http') ? linkedinValue : `https://linkedin.com/in/${linkedinValue}`,
            icon: 'linkedin',
            color: '#0077B5'
          });
        }
        
        // Github (column 12, index 12)
        if (row[12]?.trim()) {
          const githubValue = row[12].trim();
          socialLinks.push({
            name: 'Github',
            url: githubValue.startsWith('http') ? githubValue : `https://github.com/${githubValue}`,
            icon: 'github',
            color: '#333333'
          });
        }

        // Generate ID from name if ID column is empty
        const id = row[0]?.trim() 
          ? row[0].trim().toLowerCase().replace(/\s+/g, '-')
          : row[1]?.trim().toLowerCase().replace(/\s+/g, '-') || '';

        const member: TeamMember = {
          id: id,
          name: row[1]?.trim() || '', // Name column (index 1)
          gender: '', // Gender not fetched
          role: row[4]?.trim() || '', // Position column (index 4)
          team: row[5]?.trim() || '', // Team column (index 5)
          email: '', // Email not fetched
          image: row[9]?.trim() || '', // Photo column (index 9)
          muId: row[13]?.trim() || '', // MuID column (index 13)
          socialLinks: socialLinks,
        };

        // Debug log for first few members
        if (dataRows.indexOf(row) < 3) {
          console.log('Row data:', row);
          console.log('Member parsed:', member);
        }

        return member;
      });

    console.log(`Fetched ${teamMembers.length} team members from Google Sheets`);
    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members from Google Sheets:', error);
    throw error;
  }
};

/**
 * Validates the Google Sheets configuration
 */
export const validateConfig = (): { isValid: boolean; message: string } => {
  if (!SPREADSHEET_ID) {
    return { isValid: false, message: 'Spreadsheet ID is not configured' };
  }
  return { isValid: true, message: 'Configuration is valid' };
};
