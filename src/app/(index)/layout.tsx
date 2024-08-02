

// ----------------------------------------------------------------------

import { Box, Typography } from '@mui/material';
import { ThemeProviderWrapper } from '@/context/ThemeContext';
import DocumentationLayout from '@/layouts/documentationLayout';

// ----------------------------------------------------------------------



export const metadata = {
  title: 'Lucid',
  description: 'lucid documentation website.',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <ThemeProviderWrapper>
          <DocumentationLayout>
            {children}
          </DocumentationLayout>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
