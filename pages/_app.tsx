import Layout from '@/components/layout';
import React from 'react';
import '../scss/main.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
