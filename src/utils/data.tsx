import { FaInstagram, FaFacebook, FaTwitter, FaCodepen, FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';

export const DETAILS = {
  firstName: 'Firstname',
  lastName: 'Lastname',
  email: 'contact@yourdomain.com'
};

export const SERVICES = [
  {
    title: 'Front-End Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nunc odio, quis euismod orci porta et. Vestibulum dapibus elementum erat sed laoreet.'
  },
  {
    title: 'UX/UI',
    description: 'Duis pellentesque eu purus et rutrum. Nunc fermentum tristique neque, in aliquet mauris vestibulum at. Ut venenatis congue rhoncus. Sed ac erat in mi rutrum cursus non ac ante. Nam nec enim dignissim, pretium tortor.'
  },
  {
    title: 'SEO',
    description: 'Curabitur quis suscipit nulla, non interdum augue. Ut finibus, sapien vel consequat semper, est mauris accumsan leo, non mollis magna neque nec nisl. Curabitur a bibendum lacus.'
  }
];

export const FEATURED_PROJECTS = [
  {
    title: 'Event Management System',
    description: 'Web-based event management system that streamlines the event planning and registration process. The system includes features such as event calendars, online registration forms, and automated email communications.',
    link: '#'
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile app that allows users to track their workouts, set goals, and monitor their progress. The app features a clean and user-friendly interface, and is integrated with wearable fitness devices to provide accurate and real-time data.',
    link: '#'
  },
  {
    title: 'E-commerce Website',
    description: 'E-commerce website featuring a custom design and a robust back-end system. The website includes features such as product recommendations, user reviews, and a seamless checkout process.',
    link: '#'
  }
];

export const SOCIAL = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    Icon: FaLinkedin
  },
  {
    label: 'Stack Overflow',
    url: 'https://stackoverflow.com/',
    Icon: FaStackOverflow
  },
  {
    label: 'GitHub',
    url: 'https://github.com/',
    Icon: FaGithub
  },
  {
    label: 'CodePen',
    url: 'https://codepen.io/',
    Icon: FaCodepen
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
