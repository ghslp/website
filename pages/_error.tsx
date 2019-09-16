import Head from 'next/head';

import { Page } from '../components/Page';
import { getFormattedTitle } from '../utils';

const title = getFormattedTitle('404');

const Error = () => (
  <Page>
    <Head>
      <title>{title}</title>
    </Head>

    <h1>404: Not found</h1>

    <p>This page or file doesn’t exist.</p>

    <p>
      There used to be more stuff on this website, but it’s gone at the moment
      for expediency’s sake. If you’re looking for something in particular,{' '}
      <a href='mailto:g@hslp.ca'>get in touch</a> and I might be able to help.
    </p>

    <p>
      <a href='/'>Click here</a> to navigate to the homepage.
    </p>
  </Page>
);

export default Error;
