import { ReactNode } from 'react';

type ContentTitleProps = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: ContentTitleProps) => {
  return (
    <h1 id="content-title" className="font-bold text-xl">
      {children}
    </h1>
  );
};
