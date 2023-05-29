import { FaInstagram, FaFacebook, FaTwitter, FaBehance } from 'react-icons/fa';

export const DETAILS = {
  firstName: 'Firstname',
  lastName: 'Lastname',
  email: 'contact@yourdomain.com'
};

export const CONTACT_ENDPOINT_URL = 'https://edpeeymw.free.beeceptor.com/contact';

export const SERVICES = [
  {
    title: 'Professional Headshots',
    description: `Make a lasting impression with a polished and professional headshot. Whether you're an aspiring actor, a corporate executive, or a creative professional, our headshot sessions are designed to capture your unique personality and highlight your best features. Stand out from the crowd with a headshot that commands attention.`
  },
  {
    title: 'Event Photography',
    description: 'From corporate gatherings to milestone celebrations, our event photography services capture the essence of every occasion. With an eye for detail and a talent for capturing candid moments, we ensure that no important memory goes unnoticed.'
  },
  {
    title: 'Product Photography',
    description: 'Showcase your products in their best light with our expert product photography services. Whether you need images for your e-commerce store, advertising campaigns, or catalogs, we have the skills and creativity to bring your products to life.'
  }
];

export const SOCIAL = [
  {
    label: 'Behance',
    url: 'https://www.behance.net/',
    Icon: FaBehance
  },
  {
    label: 'Twitter',
    url: 'https://www.twitter.com/',
    Icon: FaTwitter
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    Icon: FaInstagram
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/',
    Icon: FaFacebook
  },
];

export const FEATURED_PROJECTS = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/1.jpeg',
    href: '/project'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/2.jpeg',
    href: '/project'
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/3.jpeg',
    href: '/project'
  },
];

export const PROJECTS = [
  ...FEATURED_PROJECTS,
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/4.jpeg',
    href: '/project'
  },
  {
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/5.jpeg',
    href: '/project'
  },
  {
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/6.jpeg',
    href: '/project'
  },
  {
    title: 'Project 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/7.jpeg',
    href: '/project'
  },
  {
    title: 'Project 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/8.jpeg',
    href: '/project'
  },
  {
    title: 'Project 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    featuredImage: '/portfolio/9.jpeg',
    href: '/project'
  },
];

export const PROJECT = {
  title: 'Project 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  images: [
    'https://placehold.co/600x400/000000/FFF',
    'https://placehold.co/400x900/d9d2cc/FFF',
    'https://placehold.co/600x800/192231/FFF',
    'https://placehold.co/600x400/c0b283/FFF',
    'https://placehold.co/800x400/d9b18e/FFF',
  ]
};

export const TESTIMONIALS = [
  {
    quote: 'Etiam sed mauris sit amet sem luctus tincidunt. Duis semper, nisi eu elementum dignissim, dolor justo facilisis justo, eget tempor orci est eu dolor. Vivamus in elementum lectus.',
    author: 'Elphonso Clutterbuck',
    company: 'Anonyco'
  },
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies consequat purus, eget mattis arcu egestas eget. Duis lacinia erat nunc, et commodo mi faucibus sit amet. Cras cursus augue diam, auctor felis fringilla at.',
    author: 'Willetta Orr',
    company: 'Bonobo & Associates'
  },
  {
    quote: 'Aliquam arcu eros, cursus vitae ex non, mattis accumsan eros. Nullam rhoncus a diam vel varius. Mauris ut sodales turpis, non lobortis urna. Suspendisse auctor dapibus sem ut mollis. Proin sit amet tempor est, lacinia fermentum nisl.',
    author: 'Bernie J Farnsworth',
    company: 'Farnsworth Lanes'
  }
];

