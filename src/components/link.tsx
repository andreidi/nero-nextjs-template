import NextLink, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>>  = (props: any) => {
  return (
    <NextLink
      {...props}
      className={`text-yellow-600 hover:text-yellow-700 font-semibold tracking-wider underline transition-colors duration-300 ease-in-out ${props.className}`}
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
