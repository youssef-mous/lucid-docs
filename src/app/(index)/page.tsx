'use client';

import { Typography } from '@mui/material';
import ThemeToggleButton from '@/components/toggle-theme-button';
export default function Home() {
  return (
    <Typography variant="h3" component="h1">
      Welcome to Lucid Docs
      <ThemeToggleButton />
    </Typography>
  );
}
