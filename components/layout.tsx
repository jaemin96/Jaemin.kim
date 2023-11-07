import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from '@/pages/_error';

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
      <div className="h-[100vh]">{props.children}</div>
    </div>
  );
};

export default Layout;
