import { ReactNode } from 'react';

type ContentTitleProps = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: ContentTitleProps) => {
  return (
    <div className="title-wrapper">
      <h1 id="content-title" className="font-bold text-[1.5rem] sm:text-[1.5rem] mb-[1.5rem]">
        {children}
      </h1>
    </div>
  );
};
