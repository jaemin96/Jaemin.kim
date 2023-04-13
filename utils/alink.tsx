import React from 'react';
import Link from 'next/link';

export const Alink = (props) => {
  const { url, children } = props;

  return (
    <Link href={`${url}`} target="_blank">
      {...children}
    </Link>
  );
};
