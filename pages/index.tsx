import { Content, Side } from '@/containers';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="mx-auto">
      <Head>
        <title>Jaemin.kim</title>
      </Head>
      <div className="flex sm:flex-col sm:gap-3 h-[100vh] mx-auto w-full">
        <Side />
        <Content />
      </div>
    </div>
  );
};

export default Home;
