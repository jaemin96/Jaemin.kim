import React, { ReactNode } from 'react';
import Link from 'next/link';

type AlinkProps = {
  url: string;
  children: ReactNode;
};

export const Alink = (props: AlinkProps) => {
  const { url, children } = props;

  return (
    <Link href={`${url}`} target="_blank">
      {children}
    </Link>
  );
};
