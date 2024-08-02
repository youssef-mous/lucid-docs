

// ----------------------------------------------------------------------

import { Box } from '@mui/material';
import { ThemeProviderWrapper } from '@/context/ThemeContext';

// ----------------------------------------------------------------------



export const metadata = {
  title: 'Lucid',
  description: 'lucid documentation website.',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" >
      <body>
        <ThemeProviderWrapper>
          <Box>{children}</Box>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
