'use client'
import {Box, Container, IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import InputBase from '@mui/material/InputBase';
import type { FC } from 'react';
import { BorderColor, BorderColorRounded, Padding } from '@mui/icons-material';
const TOP_NAV_HEIGHT = 64;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    Padding:2,
    transition: theme.transitions.create('width'),
  },

}));
const  Navbar : FC = ()=> {

    return (
        <Box
      component="header"
      sx={{
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        pt: 0,
        zIndex:1100,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: 'blur(4px)',
          backgroundColor: 'transparent',
          borderRadius: 2.5,
          boxShadow: 'none',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ height: TOP_NAV_HEIGHT }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              display="inline-flex"
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  height: 24,
                  width: 24,
                }}
              >
             
              </Box>
                <Box
                  sx={{
                    color: 'text.primary',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.3px',
                    lineHeight: 2.5,
                  }}
                >
                  Lucid Docs 
                </Box>
              
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            <Search>
                <StyledInputBase
                placeholder="Search documentation ..."
                inputProps={{ 'aria-label': 'search' }}
                />
          </Search>

              {/* <IconButton>
                <SvgIcon fontSize="small">
                  <MenuIcon />
                </SvgIcon>
              </IconButton> */}
            
          </Stack>
        </Stack>
      </Container>
    </Box>
    );
}
export default Navbar;