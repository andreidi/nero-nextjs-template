'use client';

import { ReactNode } from 'react';
import { m } from 'framer-motion';

export interface ISectionProps {
  id?: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

const Section = ({ id, title, titleClassName = '', className = '', bodyClassName = '', children }: ISectionProps) => {
  const initialStyles = { opacity: 0 };
  const inViewStyles = { opacity: 1 };

  return (
    <section className={`mt-10 md:mt-20 ${className}`} id={id}>
      {title && (
        <m.h1
          initial={initialStyles}
          whileInView={inViewStyles}
          viewport={{ once: true }}
          className={`${titleClassName} uppercase text-4xl tracking-wider mb-8 text-gray-800 font-semibold`}
        >
          {title}
        </m.h1>
      )}

      <m.div
        initial={initialStyles}
        whileInView={{ ...inViewStyles, transition: { delay: 0.25 } }}
        viewport={{ once: true }}
        className={bodyClassName}
      >
        {children}
      </m.div>
    </section>
  );
};

export default Section;
