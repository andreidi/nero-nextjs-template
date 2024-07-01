import { Metadata } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'NERO - Portfolio website template',
  creator: 'Andrei Diaconu - https://andreidi.com'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
