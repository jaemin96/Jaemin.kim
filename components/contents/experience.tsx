import { ContentTitle, ContentWrapper } from './module';
import { ReactNode } from 'react';

type TimelineItemProps = {
  act: string;
  during: string;
  children: ReactNode;
};

const TimelineItem = ({ act, during, children }: TimelineItemProps) => {
  return (
    <div>
      <div>
        <h1>{act}</h1>
        <h2>{during}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div id="experience" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Experience</ContentTitle>
      <ContentWrapper>
        {/* 메인타이틀(회사명 OR 활동주제)과 리스트영역(업무내역) 작성 */}
        {/* 스타일은 좌측에 연대기가 진행중인 것처럼 표시하도록 구현 */}
        <TimelineItem act="(주)하버엑스" during="21. 06 ~ 23. 09">
          <ul>
            <li>temp text 1</li>
            <li>temp text 2</li>
            <li>temp text 3</li>
          </ul>
        </TimelineItem>
      </ContentWrapper>
    </div>
  );
};
