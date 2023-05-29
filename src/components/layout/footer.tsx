import Link from 'next/link';

import { DETAILS } from '../../utils/data';


const Footer = () => {
  return (
    <footer className='px-5 bg-gray-50 text-gray-500'>
      <div className='container mx-auto p-8 flex flex-col md:flex-row flex-wrap text-center md:justify-between'>
        <p>&copy; {new Date().getFullYear()} {DETAILS.firstName}. All Rights Reserved.</p>
        <p>Template designed and built by <Link className='link' target='_blank' rel='noopener noreferrer' href='https://andreidi.com/'>Andrei Diaconu</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
