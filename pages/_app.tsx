import Layout from '@/components/layout';
import { AppProps } from 'next/app';
import '../style/style.css';
import { ThemeContext } from '@/asset/context';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default App;
