'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface DrawerHeaderProps {
  handleDrawerClose?: () => void;
  direction?: 'ltr' | 'rtl';
}

const Header: React.FC<DrawerHeaderProps> = ({ handleDrawerClose, direction }) => {
  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

export default Header;
