import Link from 'next/link';
import Image from 'next/image';

export interface IPortfolioItemProps {
  title: string;
  description: string;
  featuredImage: string;
  href: string;
}

const PortfolioItem = ({ title, description, featuredImage, href }: IPortfolioItemProps) => {
  return (
    <Link href={href} className='w-full h-full relative group'>
      <div className='w-full h-full overflow-hidden bg-center bg-cover bg-no-repeat bg-clip-border relative'>
        <Image src={featuredImage} width={500} height={300} alt={title} className='w-full h-full object-cover object-center' />

        <div className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-7 py-14 absolute bottom-0 left-0 text-white w-full bg-gradient-to-t from-black bg-opacity-50'>
          <h3 className='text-3xl font-bold'>{title}</h3>

          <p className='text-lg mt-4'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
