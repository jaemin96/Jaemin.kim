import { ReactNode } from 'react';

type ContentWrapperProps = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div id="content-wrapper" className="">
      {children}
    </div>
  );
};
