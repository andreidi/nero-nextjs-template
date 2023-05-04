import { ReactNode } from 'react';

import Footer from './footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>

      <Footer />
    </>
  );
}
