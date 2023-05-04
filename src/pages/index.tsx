import Image from 'next/image';
import { Card, ContactForm, Link, Section, Service, SocialIcons, TestimonialsSliderComponent } from '../components';
import { DETAILS, FEATURED_PROJECTS, SERVICES } from '../utils/data';

export default function Home() {
  return (
    <div className='container mx-auto px-5'>
      {/* Header */}
      {/* It should contain a brief overview of who you are, what you do, and what makes you unique. */}
      <header >
        <Card className='grid grid-cols-1 md:grid-cols-3 mb-20'>
          <div className='md:order-last p-0 flex flex-col justify-center'>
            <Image src='/hero.png' width={500} height={600} alt='Portrait' className='w-full h-auto' />
          </div>

          <div className='md:col-span-2 py-5 md:py-14 md:px-10 flex flex-col justify-center items-start'>
            <h1 className='text-5xl md:text-9xl font-light tracking-wider uppercase mb-10'>
              {DETAILS.firstName}{' '}{DETAILS.lastName}
            </h1>

            <p className='text-3xl font-thin tracking-wide mb-5'>
              I'm an independent <strong>Front-End Web Developer</strong>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta neque non risus bibendum luctus. Curabitur at odio sed dolor maximus viverra non sit amet neque. Phasellus luctus vestibulum tellus, sit amet lobortis orci.
            </p>
          </div>
        </Card>
      </header>

      {/* About section */}
      {/* Where you should provide more detailed information about your background, experience, skills, and education.
      This is also a good place to showcase your personality and values. */}
      <Section title='About Me'>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper porta malesuada. Nullam imperdiet
          ultricies massa vel tempus.
        </p>

        <p className='mt-5'>
          Quisque fringilla felis nisi, sit amet varius orci ultrices ullamcorper.
        </p>

        <p className='mt-5'>
          Mauris sagittis hendrerit metus vitae porta. Quisque faucibus ullamcorper metus quis congue. Praesent pharetra
          gravida leo. Aliquam ipsum dui, efficitur sit amet est ac, mollis luctus tellus.
        </p>
      </Section>

      {/* Services section */}
      {/* Where you should describe your services or products you offer, as well as any areas of specialization you may have. */}
      <Section title='My Services'>
        {SERVICES.map(({ title, description }) => <Service key={title} title={title} description={description} />)}
      </Section>

      {/* Featured projects section */}
      {/* Where you should showcase the top 3 to 5 of your projects (focus on quality, not quantity). */}
      <Section title='Featured Projects' bodyClassName='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {FEATURED_PROJECTS.map(({ title, description, link }) => {
          return (
            <Card key={title} className='flex flex-col justify-between items-start'>
              <h2 className='text-2xl font-medium'>{title}</h2>

              <p className='text-gray-200 text-base my-5'>{description}</p>

              <Link href={link} className='uppercase'>View more</Link>
            </Card>
          );
        })}
      </Section>

      {/* Client testimonials section */}
      <Section className='mt-24 mb-24'>
        <Card>
          <TestimonialsSliderComponent />
        </Card>
      </Section>

      {/* Contact section */}
      <Section title='Get in Touch' id='contact' className='mb-32'>
        <p className='text-xl '>
          I am available for both contract and freelance development projects.
        </p>
        <p className='text-lg mb-10'>
          Have a question or need help on a project? You can send me an email at{' '}
          <Link href={`mailto:${DETAILS.email}`}>{DETAILS.email}</Link>{' '}
          or simply use the form below to get in touch.
        </p>

        <ContactForm />

        <SocialIcons className='mt-20 justify-center' />
      </Section>
    </div>
  );
}
