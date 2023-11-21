import { ContentTitle, ContentWrapper } from './module';

export const About = () => {
  return (
    <div id="about" className="sm:flex sm:flex-col sm:items-center mt-[3rem] sm:mt-[2rem] mb-[1rem]">
      <ContentTitle>About Me</ContentTitle>
      <ContentWrapper>
        <div>
          <p className="sm:text-center sm:text-[1rem] font-light leading-7">
            <span className="font-medium">기록</span>하고 정리하는 것을 좋아하는{' '}
            <span className="font-medium">3년차 개발자 김재민</span> 입니다. <br />
            <span className="font-medium">React</span>를 주로 사용하여 <span className="font-medium">웹 FE개발자</span>
            로서의 경험을 쌓고 있습니다.
            <br />
            새로운 기술이나 문법들을 배우고 공유할 수 있는 개발 문화를 지향합니다.
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};
