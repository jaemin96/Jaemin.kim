import Layout from '@/components/layout';
import { AppProps } from 'next/app';
import '../style/style.scss';
import { ThemeContext } from '@/asset/context';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const themeMode = localStorage.getItem('thememode') || 'light';
    setTheme(themeMode);

    if (themeMode === 'dark') document.body.style.backgroundColor = '#282828';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [theme]);

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
