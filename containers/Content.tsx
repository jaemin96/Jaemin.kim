import { ThemeContext } from '@/asset/context';
import { About, Experience, Project, Skill } from '@/components/contents';
import { useContext } from 'react';

export const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="content"
      className={`p-[1.5rem] pl-[3rem] flex-[80%] row-span-2 flex flex-col gap-[1rem] md:overflow-auto lg:overflow-auto col-span-3 sm:align-center ${
        theme === 'light' ? '' : 'bg-custom-gray text-custom-light'
      }`}
    >
      <About />
      <Skill />
      <Experience />
      <Project />
      <div className="side_wrapper-copyright hidden sm:block py-[1.5rem]">
        <span className="flex justify-center w-full text-gray-warm-4">©2023. Jaemin Kim. All rights reserved.</span>
      </div>
    </div>
  );
};
