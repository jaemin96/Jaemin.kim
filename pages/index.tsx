import { ThemeContext } from '@/asset/context';
import { Content, Side } from '@/containers';
import { Meta } from '@/utils';
import { useContext } from 'react';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mx-auto">
      <Meta
        title={'Jaemin.kim'}
        description={`김재민's 웹 포트폴리오`}
        ogTitle={`김재민's 포트폴리오`}
        ogDescription={`Web FE Engineer with React`}
        ogImage={`https://raw.githubusercontent.com/jaemin96/Jaemin.kim/main/public/images/avatar.jpeg`}
        ogUrl={`https://www.jaemin96.com/`}
      />
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
