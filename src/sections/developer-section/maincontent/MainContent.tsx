'use client';

import { Box } from '@mui/material';
export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: 3,

      }}
    >
      {children}
    </Box>
  );
}
