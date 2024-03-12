import { NextPage } from 'next';
import Head from 'next/head';
import { memo, PropsWithChildren } from 'react';
import { Metadata } from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<Metadata>> = memo(({ children, title, description }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={description}
        />

        <link rel="manifest" href="manifest.json" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
