import { IconContext, IconType } from 'react-icons';

import { SOCIAL } from '../utils/data';

export interface ISocialIconsProps {
  size?: string;
  className?: string;
}

interface ISocialIconProps {
  label: string;
  url: string;
  Icon: IconType
}

const SocialIcon = ({ label, url, Icon }: ISocialIconProps) => {
  return (
    <a
      key={label}
      href={url}
      title={label}
      target='_blank'
      rel='noopener noreferrer'
      className='transition-all	hover:-translate-y-1 hover:text-yellow-600 duration-300 ease-in-out'
    >
      <Icon />
    </a>
  );
};

const SocialIcons = ({ size = '40', className }: ISocialIconsProps) => {
  return (
    <div className={`flex flex-row flex-wrap gap-6 ${className}`}>
      <IconContext.Provider value={{ size }}>
        {SOCIAL.map((details) => SocialIcon(details))}
      </IconContext.Provider>
    </div>
  );
};

export default SocialIcons;
