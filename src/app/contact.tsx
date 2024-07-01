import Link from 'next/link';

import { ContactForm, Section, SocialIcons } from '../components';

import { DETAILS } from '../utils/data';

export default function Contact() {
  return (
    <div className='min-h-screen max-w-screen-xl mx-auto px-5 flex flex-col justify-center'>
      <Section title='Get in Touch' className='mt-0'>
        <p className='text-xl '>
          I am available for both contract and freelance projects.
        </p>
        <p className='text-lg mb-10'>
          Have a question or need help on a project? You can send me an email at{' '}
          <Link className='link' href={`mailto:${DETAILS.email}`}>{DETAILS.email}</Link>{' '}
          or simply use the form below to get in touch.
        </p>

        <ContactForm />

        <SocialIcons className='my-20 justify-center' />
      </Section>
    </div>
  );
}
