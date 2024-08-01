'use client';

import { Box, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
export const SIDE_BAR_WIDTH = 250;
export default function Sidebar() {
  return (
    <Box sx={{ width:`${SIDE_BAR_WIDTH}px`, height: '100vh', borderRight: '1px solid rgba(0, 0, 0, 0.12)' ,position:'fixed',top:0}}>
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
}
