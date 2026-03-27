// Static team member routes mapping
// Map route paths to member names for lookup

export interface TeamRoute {
  path: string;        // URL path (e.g., "chethas")
  memberName: string;  // Full name to match in the sheet (exact match)
}

// Define your allowed team member routes here
// Use full names for exact matching to handle duplicate names
export const teamRoutes: TeamRoute[] = [
  { path: "amarnath", memberName: "Amarnath Sujith" },
  { path: "chethas", memberName: "Chethas L Pramod" },
  { path: "aswath", memberName: "Aswath S A" },
  { path: "adithya", memberName: "Adithya R" },
  { path: "ananya", memberName: "Ananya K" },
  { path: "mohammed-hafeez", memberName: "Mohammed Hafeez" },
  { path: "mihirima", memberName: "Mihirima A R" },
  { path: "amna", memberName: "Amna Fathima S" },
  { path: "niveditha", memberName: "Niveditha Gopakumar" },
  { path: "bhagyashree", memberName: "Bhagyasree" },
  { path: "anjana", memberName: "Anjana MS" },
  { path: "anza", memberName: "Anza S" },
  { path: "akshay", memberName: "Akshay G" },
  { path: "aneez", memberName: "Aneez Rahuman M" },
  { path: "arjun-tk", memberName: "Arjun TK" },
  { path: "arjun-g", memberName: "Arjun G" },
  { path: "teny", memberName: "Teny Catherine Tony" },
  { path: "sooryakanth", memberName: "Sooryakanth S" },
  { path: "mohammed-irfan", memberName: "Mohammed Irfan P" },
  { path: "fathima", memberName: "Fathima S" },
  { path: "adwaith", memberName: "Adwaith S" },
  { path: "pranav", memberName: "Pranav g nath" },
  { path: "sruthy", memberName: "Sruthy N S" },
  { path: "theertha", memberName: "Theertha. S. Nair" },
  { path: "midhun", memberName: "Midhun Das" },
  { path: "aadil", memberName: "Aadil Mohamed A" },
  { path: "sanjay", memberName: "Sanjay krishna" },
  { path: "richard", memberName: "Richard S" },
  { path: "vaishakh", memberName: "Vaishakh V S" },
  { path: "abhishek", memberName: "Abhishek P" },
  { path: "aswin-s", memberName: "Aswin S" },
  { path: "sreerag", memberName: "Sreerag Satheesh S" },
  { path: "adarsh", memberName: "Adarsh Dev M.R." },
];

// Helper function to check if a route is allowed
export const isValidTeamRoute = (path: string): boolean => {
  return teamRoutes.some(route => route.path === path);
};

// Helper function to get member name from route path
export const getMemberNameFromPath = (path: string): string | undefined => {
  const route = teamRoutes.find(r => r.path === path);
  return route?.memberName;
};
