'use client';
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TopBar from '@/components/topbar';
import Drawer from '@/components/drawer';
import MainContent from '@/components/main-content';

interface DocumentationLayoutProps {
  children: React.ReactNode;
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ children }) => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} direction={theme.direction} />
      <MainContent open={open}>
        {children}
      </MainContent>
    </Box>
  );
};

export default DocumentationLayout;
