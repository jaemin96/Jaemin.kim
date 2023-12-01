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
    <div>
      <div className="sm:flex sm:gap-2 sm:">
        <h1>{company}</h1>
        <h2>{during}</h2>
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
                      {project?.myAct?.map((act, i) => {
                        return <li key={i}>{act}</li>;
                      })}
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
