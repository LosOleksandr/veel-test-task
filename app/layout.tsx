import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/providers/theme-provider';
import QueryProvider from './providers/query-provider';
import { Toaster } from 'react-hot-toast';
import Header from './components/header';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo app with Next JS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="bottom-center" />
            <Header />
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
