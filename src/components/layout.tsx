import { ReactNode } from 'react';
import { Raleway } from 'next/font/google';

import Navbar from './layout/navbar';
import Footer from './layout/footer';

const raleway = Raleway({
  subsets: ['latin']
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={raleway.className}>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
