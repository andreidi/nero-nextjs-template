import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

import { TESTIMONIALS } from '../utils/data';

export interface ITestimonialSlideProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialSlide = ({ quote, author, company }: ITestimonialSlideProps) => {
  return (
    <SwiperSlide key={author} >
      <div className='container m-auto px-4 py-10 md:py-20'>
        <blockquote>
          <p className='font-extralight leading-relaxed text-3xl mb-5'>&rdquo; {quote} &ldquo;</p>

          <footer className='text-xl text-right'>
            <strong>{author}</strong>
            <span className='mr-2'>,</span>
            <em className='font-light'>{company}</em>
          </footer>
        </blockquote>
      </div>
    </SwiperSlide >
  );
};

const TestimonialsSliderComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
    >
      {TESTIMONIALS.map((testimonial) => TestimonialSlide(testimonial))}
    </Swiper >
  );
};

export default TestimonialsSliderComponent;
