import { Content, Side } from '@/containers';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jaemin.kim</title>
      </Head>
      <div className="w-full flex h-[100vh] bg-gray-cool-1 sm:flex-col">
        <Side />
        <Content />
      </div>
    </div>
  );
};

export default Home;
