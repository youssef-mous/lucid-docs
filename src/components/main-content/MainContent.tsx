'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Container from '@/components/container';
import DrawerHeader from '@/components/drawer-header';
const drawerWidth = 240;

interface MainContentProps {
  open: boolean,
  children?: React.ReactNode;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainContent: React.FC<MainContentProps> = ({ open ,children}) => {
  return (
    <Main open={open}>
      <DrawerHeader/>
      <Container>
        {children}
      </Container>
    </Main>
  );
};

export default MainContent;
