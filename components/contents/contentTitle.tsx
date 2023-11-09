import { ReactNode } from 'react';

type ContentTitleProps = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: ContentTitleProps) => {
  return (
    <div className="title-wrapper">
      <h1 id="content-title" className="font-bold text-xl sm:text-[1.5rem] mb-[1rem]">
        {children}
      </h1>
    </div>
  );
};
