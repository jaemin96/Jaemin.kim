import { ReactNode } from 'react';
import { ContentTitle, ContentWrapper } from './module';

type MyProjectProps = {
  thumbnail: string;
  children: ReactNode;
};

const MyProject = ({ thumbnail, children }: MyProjectProps) => {
  return (
    <div className="project_container flex border-2">
      <div className="thumbnail_wrapper w-[12rem] h-[10rem] border-2">{thumbnail}</div>
      <div className="info_wrapper">{children}</div>
    </div>
  );
};

export const Project = () => {
  return (
    <div id="project" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Project</ContentTitle>
      <ContentWrapper>
        <MyProject thumbnail="@">
          <div className="flex">
            <h1 className="title">Project 1</h1>
            <span>2022 ~ 2033</span>
          </div>
          <ul className="skill_wrapper flex">
            <li>react</li>
            <li>ts</li>
            <li>scss</li>
          </ul>
        </MyProject>
      </ContentWrapper>
    </div>
  );
};
