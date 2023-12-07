import { ContentTitle, ContentWrapper } from './module';
import { ReactNode, useContext } from 'react';
import { WorkExperiences } from '@/asset/config';
import { ThemeContext } from '@/asset/context';

type TimelineItemProps = {
  company: string;
  during: string;
  children: ReactNode;
};

const TimelineItem = ({ company, during, children }: TimelineItemProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex sm:flex-col gap-[2rem] sm:gap-[1rem] mb-[2rem] sm:mb-[3rem] p-[1rem] sm:max-w-[25rem] max-w-[55rem] ${
        theme === 'light' ? '' : 'bg-gray-cool-9'
      }`}
    >
      <div className="sm:flex sm:gap-2 sm:justify-center">
        <h1 className="flex flex-col text-lg whitespace-nowrap font-bold border-r-2 border-gray-cool-3 pr-[2rem] sm:pr-0 sm:flex-row sm:items-center sm:gap-2 sm:border-0">
          {company}
          <span className={`text-sm font-semibold ${theme === 'light' ? 'text-gray-cool-5' : 'text-gray-cool-3'}`}>
            {during}
          </span>
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="experience" className="experience sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Work Experience</ContentTitle>
      <ContentWrapper>
        {WorkExperiences?.map((data) => {
          return (
            <TimelineItem key={data?.key} company={data?.company} during={data?.during}>
              {data?.projects &&
                data.projects.map((project) => {
                  return (
                    <div key={project?.key} className={`experience-project sm:text-center text-[0.88rem] mb-[1rem]`}>
                      <h1
                        className={`experience-project-title text-[0.95rem] font-bold ${
                          theme === 'light' ? 'text-gray-cool-9' : 'text-gray-cool-1'
                        }`}
                      >
                        {project?.title}
                      </h1>
                      <h2
                        className={`experience-project-intro text-[0.83rem] font-semibold mb-[0.3rem] ${
                          theme === 'light' ? 'text-gray-warm-5' : 'text-gray-cool-4'
                        }`}
                      >
                        {project?.intro}
                      </h2>
                      <ul className={`experience-project-acts ${theme === 'light' ? '' : 'text-gray-warm-1'}`}>
                        {project?.myAct?.map((act, i) => {
                          return (
                            <li key={i} className={`act`}>
                              {act}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              {data?.contributes && (
                <ul className={`experience-contributes text-[0.9rem] pt-[0.3rem] sm:text-center`}>
                  {data.contributes.map((contribute, i) => {
                    return (
                      <li key={i} className={`contribute flex items-center mb-[0.75rem] gap-[0.15rem] sm:items-start`}>
                        {contribute}
                      </li>
                    );
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
