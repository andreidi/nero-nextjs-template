import Link from 'next/link';

import SocialIcons from '../social-icons';

const NAVBAR_LINKS = [
  {
    label: 'Work',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row items-center justify-between p-8 bg-stone-900'>
      <div className='items-center justify-between flex w-auto'>
        <ul className='flex flex-row font-medium space-x-8'>
          {NAVBAR_LINKS.map(({ label, href }) => <li key={label}>
            <Link href={href} className='text-gray-50 hover:text-yellow-600 duration-300 ease-in-out no-underline py-2 pl-3 pr-4 text-lg font-light'>{label}</Link>
          </li>)}
        </ul>
      </div>

      <SocialIcons size='30' className='mt-10 md:mt-0 text-gray-50' />
    </nav>
  );
};

export default Navbar;
