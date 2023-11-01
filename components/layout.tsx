import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from '@/pages/_error';
// import { Header } from '@/containers';

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    router?.pathname === '/_error' && setError(true);
  }, [router]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div>
      {/* {!isError && <Header />} */}
      <div className="container mx-auto">
        <div className="mt-[1.5rem]">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
