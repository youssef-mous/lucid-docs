'use client';

import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from '@/components/general-components/SearchBar';
import Logo from '@/components/general-components/Logo';
import Link from 'next/link';

export const TOP_BAR_HEIGHT = 64;

export default function Header() {
  return (
    <Box
      sx={{
        height: TOP_BAR_HEIGHT,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backgroundColor: (theme) => theme.palette.background,
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: 'inset 0px -1px 1px rgba(0, 0, 0, 0.12)',
      }}
    >
      <AppBar position="fixed" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Link href="/" passHref>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Logo />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                  color: (theme) => theme.palette.text.primary,
                  marginLeft: '10px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                Lucid Docs
              </Typography>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} >
          <SearchBar />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
