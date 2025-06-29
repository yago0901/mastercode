import { ThemeProvider } from '@/context/ThemeProvider';
import { ReactQueryProvider } from "@/context/ReactQueryProvider";

import '../styles/theme.css'
import '../styles/globals.css'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <ThemeProvider>
        <body style={{ backgroundColor: 'var(--background)', fontFamily: 'sans-serif', width: '100vw' }} >
          <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
