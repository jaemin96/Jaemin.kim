import Layout from '@/components/layout';
import React from 'react';
import '../style/style.css';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
