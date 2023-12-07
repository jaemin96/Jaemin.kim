import { ContentTitle, ContentWrapper } from './module';
import { ReactNode, useContext, useState } from 'react';
import { ProgressBar } from '../progress';
import { ThemeContext } from '@/asset/context';

type ExpandProps = {
  multiple?: boolean;
  skills: string[];
  category: string;
  children: ReactNode;
};

type ExpandedItemProps = {
  title: string;
  per: number;
  children: ReactNode;
};

const Expand = ({ category, skills, children }: ExpandProps) => {
  const { theme } = useContext(ThemeContext);

  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div
      className={`expand-wrapper ${isExpand ? 'expanded' : ''} mb-[0.5rem] sm:max-w-[25rem] max-w-[50rem] ${
        isExpand && 'mb-[1.5rem]'
      }`}
    >
      <div className="flex items-center sm:justify-center">
        <div className="flex gap-1">
          <h1 className="font-extrabold">{`${category} : `}</h1>
          <ul className="skill-list flex gap-1 font-medium">
            {skills?.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="icon-container ml-[0.5rem] cursor-pointer" onClick={handleExpand}>
          <div className="expand-icon"></div>
        </div>
      </div>
      <div
        className={`expanded-wrapper my-[0.3rem] border-[0.1rem] border-gray-cool-2 ${
          theme === 'dark' ? 'bg-gray-cool-9 border-[0px]' : ''
        } ${isExpand && 'p-[0.5rem]'}`}
      >
        {isExpand && children}
      </div>
    </div>
  );
};

const ExpandedItem = ({ title, per, children }: ExpandedItemProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mx-[0.5rem] mb-[0.5rem]">
      <div className="flex items-center gap-1">
        <h1 className={`min-w-[2.5rem] font-semibold ${theme === 'dark' ? 'text-custom-Emerald' : 'text-info-800'}`}>
          {title}
        </h1>
        <ProgressBar id={`progress-bar-${title}${per}`} percentage={per} />
      </div>
      <p className={`text-[0.9rem] max-w-[30rem] ${theme === 'dark' ? 'text-gray-cool-3' : 'text-gray-cool-6'}`}>
        {children}
      </p>
    </div>
  );
};

export const Skill = () => {
  return (
    <div id="skill" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Skill</ContentTitle>
      <ContentWrapper>
        {/* SKILL - Part. Language  */}
        <Expand category="LANGUAGE" skills={['Javascript', 'Typescript']}>
          <ExpandedItem title="Javascript" per={90}>
            ES6+ 문법을 주로 사용하며 사용에 익숙한 수준입니다
          </ExpandedItem>
          <ExpandedItem title="Typescript" per={50}>
            기본적인 문법 지식은 가지고 있으며 지속적으로 학습하고 있습니다
          </ExpandedItem>
        </Expand>
        {/* SKILL - Part. FE  */}
        <Expand category="FRONT-END" skills={['HTML', 'CSS', 'React', 'Next']}>
          <ExpandedItem title="HTML" per={90}>
            기본적인 태그에 대한 이해도가 있으며 실제 사용에도 익숙한 수준입니다
          </ExpandedItem>
          <ExpandedItem title="CSS" per={90}>
            CSS에 대한 이해도가 높은 편이며 SCSS, tailwindcss 등 다양한 CSS 전처리기 사용 경험이 있습니다
          </ExpandedItem>
          <ExpandedItem title="React" per={85}>
            함수형 코드를 주로 사용하며 기본적인 hook에 대한 이해와 사용에 익숙한 수준입니다
          </ExpandedItem>
          <ExpandedItem title="Next" per={50}>
            SSR과 성능최적화에 초점을 두고 지속적으로 학습하고 있습니다
          </ExpandedItem>
        </Expand>
        <Expand category="BACK-END" skills={['Node', 'TypeORM']}>
          <ExpandedItem title="Node" per={50}>
            약간의 지식과 간단한 RESTful API 작성 정도는 가능한 수준입니다. nest 프레임워크 사용 경험이 있습니다
          </ExpandedItem>
          <ExpandedItem title="TypeORM" per={60}>
            Entity정의, 관계설정, 쿼리작성 등 기본적인 설정과 사용이 가능한 정도입니다
          </ExpandedItem>
        </Expand>
      </ContentWrapper>
    </div>
  );
};
