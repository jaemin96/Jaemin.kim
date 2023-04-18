import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import '../scss/main.scss';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/_error' && <Header />}
      <Component {...pageProps} />
      {router.pathname !== '/_error' && <Footer />}
    </>
  );
};

export default App;
