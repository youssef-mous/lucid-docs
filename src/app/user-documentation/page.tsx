'use client';

import { Typography } from '@mui/material';
import { SettingsDrawer} from '@/components/settings';
export default function Home() {
  return (
    <Typography variant="h3" component="h1">
      Welcome to Lucid Docs
      <SettingsDrawer/>
    </Typography>
  );
}
