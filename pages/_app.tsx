import React from 'react';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import '../scss/main.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
