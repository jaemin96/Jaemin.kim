import { ThemeContext } from '@/asset/context';
import { ReactNode, useContext } from 'react';

type ContentTitleProps = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: ContentTitleProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="title-wrapper">
      <h1
        id="content-title"
        className={`font-bold text-[1.5rem] sm:text-[1.5rem] mb-[1.5rem] ${
          theme === 'light' ? 'before:bg-custom-blue' : 'before:bg-custom-Emerald'
        }`}
      >
        {children}
      </h1>
    </div>
  );
};
