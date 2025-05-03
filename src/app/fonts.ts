import { IBM_Plex_Sans } from 'next/font/google';

export const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // adjust weights as needed
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});
