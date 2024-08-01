'use client';

import { Box } from '@mui/material';
import { TOP_BAR_HEIGHT } from '@/components/layouts/Header';
import { SIDE_BAR_WIDTH } from '@/components/layouts/SideBar';
export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        marginTop: `${TOP_BAR_HEIGHT}px`,
        padding: 3,
        marginLeft: `${SIDE_BAR_WIDTH}px`,	
      }}
    >
      {children}
    </Box>
  );
}
