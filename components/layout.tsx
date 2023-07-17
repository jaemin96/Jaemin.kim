import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Header } from '@/containers';

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const router = useRouter();

  if (router.pathname === '/404') {
    return (
      <div id="container" className="container mx-auto">
        <div>{props.children}</div>
      </div>
    );
  }

  return (
    <div id="container" className="container mx-auto">
      <div className="wrapper">
        <Header />
        <div className="mt-[1.5rem]">{props.children}</div>
        {/* TODO: Add <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
