import { ThemeContext } from '@/asset/context';
import { Content, Side } from '@/containers';
import Head from 'next/head';
import { useContext } from 'react';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mx-auto">
      <Head>
        <title>Jaemin.kim</title>
      </Head>
      <div
        className={`flex sm:flex-col sm:gap-3 h-[100vh] mx-auto w-full ${
          theme === 'light' ? '' : 'sm:bg-custom-gray '
        }`}
      >
        <Side />
        <Content />
      </div>
    </div>
  );
};

export default Home;
