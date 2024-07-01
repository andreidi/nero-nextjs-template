import { Section, TestimonialsSliderComponent, } from '../components';

import PortfolioItem from '../components/portfolio-item';

import { DETAILS, PROJECTS } from '../utils/data';

export default function Home() {
  return (
    <>
      {/* Header */}
      {/* It should contain a brief overview of who you are, what you do, and what makes you unique. */}
      <header className='md:mb-20'>
        <div className='bg-stone-900 text-gray-50 py-14 md:pt-32 md:pb-48 px-4 md:px-12 flex flex-col justify-center items-center text-center'>
          <div className='max-w-screen-2xl'>
            <h1 className='text-5xl md:text-8xl font-light tracking-wider uppercase mb-10'>
              {DETAILS.firstName}{' '}{DETAILS.lastName}
            </h1>

            <p className='text-3xl font-thin tracking-wide mb-5'>
              I'm an independent <strong>photographer</strong>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta neque non risus bibendum luctus. Curabitur at odio sed dolor maximus viverra non sit amet neque. Phasellus luctus vestibulum tellus, sit amet lobortis orci.
            </p>
          </div>
        </div>
      </header>

      <Section className='container max-w-screen-2xl mx-auto px-5 py-12' bodyClassName='grid md:grid-cols-3 items-center gap-6'>
        {PROJECTS.map(({ title, description, featuredImage, href }) => <PortfolioItem key={title} title={title} description={description} featuredImage={featuredImage} href={href} />)}
      </Section>

      <Section className='mt-24 py-24'>
        <TestimonialsSliderComponent />
      </Section>
    </>
  );
}
