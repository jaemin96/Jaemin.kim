import { ThemeContext } from '@/asset/context';
import { ReactNode, useContext } from 'react';
import { ContentTitle, ContentWrapper } from './module';

type HighlightProps = {
  children: ReactNode;
};

export const About = () => {
  const { theme } = useContext(ThemeContext);

  const Highlight = ({ children }: HighlightProps) => {
    return <span className={`${theme === 'dark' ? 'font-bold text-custom-Emerald' : ''}`}>{children}</span>;
  };

  const MobileBr = () => {
    return (
      <span className="hidden sm:inline">
        <br />
      </span>
    );
  };

  return (
    <div id="about" className="sm:flex sm:flex-col sm:items-center sm:text-center mt-[3rem] sm:mt-[2rem] mb-[1rem]">
      <ContentTitle>Intro</ContentTitle>
      <ContentWrapper>
        <div>
          <div className="text-[0.95rem] sm:text-[0.92rem] leading-7">
            <p>
              <Highlight>기록</Highlight>하고 정리하는 것을 좋아하는
              <MobileBr />
              <Highlight> 3년차 개발자 김재민</Highlight> 입니다.
            </p>
            <p className="whitespace-nowrap">
              <Highlight> React</Highlight>를 주로 사용하여
              <MobileBr />
              <Highlight> 웹 FE개발자</Highlight>
              로서의 경험을 쌓고 있습니다.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
