import { Content, Side } from '@/containers';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jaemin.kim</title>
      </Head>
      <div className="grid grid-cols-4 grid-rows-1 sm:grid-cols-1 sm:grid-rows-4 h-[100vh] sm:w-full sm:mx-auto">
        <Side />
        <Content />
      </div>
    </div>
  );
};

export default Home;
