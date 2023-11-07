import { About } from '@/components/contents';

export const Content = () => {
  return (
    <div id="content" className="m-[1.5rem] flex flex-col gap-[1rem] md:overflow-auto lg:overflow-auto  col-span-3">
      <About />
    </div>
  );
};
