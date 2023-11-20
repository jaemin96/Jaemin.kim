import { About, Experience, Project, Skill } from '@/components/contents';

export const Content = () => {
  return (
    <div
      id="content"
      className="m-[1.5rem] pl-[3rem] row-span-2 sm:pl-0 flex flex-col gap-[1rem] md:overflow-auto lg:overflow-auto  col-span-3 sm:align-center"
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
