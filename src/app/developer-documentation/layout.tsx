

// ----------------------------------------------------------------------

import { Box } from '@mui/material';
import ThemeProvider from '@/theme';
import { primaryFont } from '@/theme/typography';
import { LocalizationProvider } from '@/locales';

import Header from '@/sections/developer-section/Header';
import Sidebar from '@/sections/developer-section/SideBar';
import MainContent from '@/sections/developer-section/MainContent';
import { SettingsDrawer} from '@/components/settings';
import {SettingsProvider} from '@/context/settings'; 
// ----------------------------------------------------------------------

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Lucid',
  description: 'lucid documentation website.',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'default', // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
            }}
          >
          <ThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              
              <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Sidebar />
                <MainContent>
                  {children}
                </MainContent>
              </Box>
            </Box>
          </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
