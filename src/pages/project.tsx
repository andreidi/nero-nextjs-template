import Image from 'next/image';

import { PROJECT } from '../utils/data';
import { Section } from '../components';

export default function Project() {
  const { title, description, images } = PROJECT;
  return (
    <div className='max-w-screen-md mx-auto py-14 md:py-24'>
      <header className='text-center px-4'>
        <h1 className='text-5xl font-semibold mt-8'>
          {title}
        </h1>

        <p className='text-xl font-light text-gray-700 mt-6'>
          {description}
        </p>
      </header>

      <Section bodyClassName='flex flex-col gap-y-8 mt-20'>
        {images.map((src) => <Image key={src} src={src} alt={title} width={800} height={800} />)}
      </Section>
    </div>
  );
}
