import { DETAILS } from '../utils/data';
import Link from './link';

const Footer = () => {
  return (
    <footer className='container mx-auto px-5 text-gray-500'>
      <div className='p-8 bg-gray-50 flex flex-col md:flex-row flex-wrap text-center md:justify-between'>
        <p>&copy; {new Date().getFullYear()} {DETAILS.firstName}. All Rights Reserved.</p>
        <p>Template designed and built by <Link target='_blank' rel='noopener noreferrer' href='https://andreidi.com/'>Andrei Diaconu</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
