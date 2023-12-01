import { ThemeContext } from '@/asset/context';
import { ReactNode, useContext } from 'react';
import { ContentTitle, ContentWrapper } from './module';

type HighlightProps = {
  children: ReactNode;
};

export const About = () => {
  const { theme } = useContext(ThemeContext);

  const Highlight = ({ children }: HighlightProps) => {
    return <span className={`font-bold ${theme === 'dark' ? 'text-custom-Emerald' : ''}`}>{children}</span>;
  };

  return (
    <div id="about" className="sm:flex sm:flex-col sm:items-center mt-[3rem] sm:mt-[2rem] mb-[1rem]">
      <ContentTitle>Intro</ContentTitle>
      <ContentWrapper>
        <div>
          <p className="sm:text-[0.9rem] leading-7">
            <div>
              <Highlight>기록</Highlight>하고 정리하는 것을 좋아하는
              <Highlight> 3년차 개발자 김재민</Highlight> 입니다.
            </div>
            <div>
              <Highlight> React</Highlight>를 주로 사용하여 <Highlight>웹 FE개발자</Highlight>
              로서의 경험을 쌓고 있습니다. 새로운 기술이나 문법들을 배우고 공유할 수 있는 개발 문화를 지향합니다.
            </div>
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};
