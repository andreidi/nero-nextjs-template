import Head from 'next/head';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1' />

      <title>NERO - One page portfolio website template</title>

      <meta name='description' content='NERO - One page portfolio website template by Andrei Diaconu (andreidi.com)' />
      <meta name='author' content='Andrei Diaconu' />
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>);
}
