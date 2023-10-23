import { GetServerSideProps } from 'next';

type ErrorPageProps = {
  statusCode?: number;
};

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  console.log({ statusCode });

  let errorMessage = '';

  switch (statusCode) {
    case 404:
      errorMessage = '페이지를 찾을 수 없습니다.';
      break;
    case 500:
      errorMessage = '서버 오류가 발생했습니다.';
      break;
    default:
      errorMessage = '알 수 없는 오류가 발생했습니다.';
  }

  return <div>{errorMessage}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  const { statusCode } = res;

  return { props: { statusCode } };
};

export default ErrorPage;
