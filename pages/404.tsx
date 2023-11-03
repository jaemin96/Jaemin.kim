import Link from 'next/link';

const ErrorPage404 = () => {
  return (
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다.</h1>
      <Link href="/">홈으로 이동</Link>
    </div>
  );
};

export default ErrorPage404;
