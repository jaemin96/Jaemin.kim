import Layout from '@/components/layout';
import { AppProps } from 'next/app';
import '../style/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default App;
