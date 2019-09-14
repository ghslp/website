import Head from 'next/head';

import { Page } from '../components/Page';

const Home = () => (
  <Page>
    <Head>
      <title>Grant Heaslip</title>
    </Head>

    <h1>Grant Heaslip</h1>

    <p>
      I’m a web developer, wannabe polymath, and video game nerd living in
      Toronto, Canada. I still don’t have much of anything figured out.
    </p>

    <p>
      If you want to get in touch, send an e-mail to{' '}
      <a href='mailto:g@hslp.ca'>g@hslp.ca</a>.
    </p>
  </Page>
);

export default Home;
