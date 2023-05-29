import Image from 'next/image';

import { Section, Service } from '../components';

import { SERVICES } from '../utils/data';
import Link from 'next/link';

export default function About() {
  return (
    <div className='min-h-screen max-w-screen-xl mx-auto px-5 pb-12 md:pb-24 flex flex-col justify-center'>
      <header className='mx-auto p-16 max-w-screen-sm'>
        <Image src='/hero.png' width={500} height={600} alt='Portrait' />
      </header>

      <Section title='About me' className='mt-0'>
        <p className='text-xl text-gray-600'>
          With a passion for storytelling through the lens, I specialize in creating stunning visual narratives that preserve your most cherished memories.
          Whether it's a wedding, family portrait, or special event, I'm dedicated to delivering exceptional photography that will leave you captivated.
        </p>

        <p className='mt-5 text-lg text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Section>

      <Section title='What I do'>
        <div className='flex flex-col gap-y-12'>
          {SERVICES.map(({ title, description }) => <Service key={title} title={title} description={description} />)}
        </div>

        <p className='text-xl mt-14 text-gray-600'>
          For commissioned work and projects, <Link className='link' href='/contact'>get in touch</Link>!
        </p>
      </Section>
    </div>
  );
}
