import { ContentTitle, ContentWrapper } from './module';
import { ReactNode } from 'react';
import { WorkExperiences } from '@/asset/config';

type TimelineItemProps = {
  company: string;
  during: string;
  children: ReactNode;
};

const TimelineItem = ({ company, during, children }: TimelineItemProps) => {
  return (
    <div className="flex sm:flex-col gap-[2rem] sm:gap-[1rem] mb-[2rem] sm:mb-[3rem]">
      <div className="sm:flex sm:gap-2 sm:justify-center">
        <h1 className="flex flex-col border-r-2 pr-[2rem] sm:pr-0 sm:flex-row sm:gap-2 sm:border-0">
          {company} <span>{during}</span>
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div id="experience" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Work Experience</ContentTitle>
      <ContentWrapper>
        {WorkExperiences?.map((data) => {
          return (
            <TimelineItem key={data?.key} company={data?.company} during={data?.during}>
              {data?.projects &&
                data.projects.map((project) => {
                  return (
                    <div key={project?.key}>
                      <h1>{project?.title}</h1>
                      <h2>{project?.intro}</h2>
                      <ul>
                        {project?.myAct?.map((act, i) => {
                          return <li key={i}>{act}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              {data?.contributes && (
                <ul>
                  {data.contributes.map((contribute, i) => {
                    return <li key={i}>{contribute}</li>;
                  })}
                </ul>
              )}
            </TimelineItem>
          );
        })}
      </ContentWrapper>
    </div>
  );
};
