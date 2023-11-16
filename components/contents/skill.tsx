import { ContentTitle, ContentWrapper } from './module';
import { ReactNode, useState } from 'react';
import { ProgressBar } from '../progress';

/** skill content TODO:list
 * -[] 토글 expand 스타일로 확장 폼 구현
 * -[] 타입 별 스킬 종류를 기재하고 확장 시 확장된 폼에서 스킬 숙련도 및 간단한 코멘트를 기재
 * -[] 확장영역 on/off 시 transition 및 스타일 적용
 * -[] 기술 숙련도를 나타내는 progress bar 구현
 */

type ExpandProps = {
  multiple?: boolean;
  skills: string[];
  category: string;
  children: ReactNode;
};

const Expanded = ({ category, skills, children }: ExpandProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className={`expand-wrapper ${isExpand ? 'expanded' : ''}`}>
      <div className="flex" onClick={handleExpand}>
        <h1>{`${category} | `}</h1>
        <ul className="flex gap-[0.5rem]">
          {skills?.map((skill, i) => {
            return <li key={i}>{skill}</li>;
          })}
        </ul>
        <div className="icon-container w-[1.5rem] h-[1.5rem]">
          <div className="expand-icon w-full h-full"></div>
        </div>
      </div>
      <div className="expanded-wrapper">{isExpand && children}</div>
    </div>
  );
};

export const Skill = () => {
  return (
    <div id="skill" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Skill</ContentTitle>
      <ContentWrapper>
        <Expanded category="FE" skills={['React', 'Next', 'SCSS']}>
          <div className="mx-[0.5rem]">
            <div className="flex items-center gap-1">
              <h1>React</h1>
              <ProgressBar percentage={80} />
            </div>
            <span className="text-[0.9rem] text-gray-warm-6">Skill에 대한 코멘트 작성 영역</span>
          </div>
        </Expanded>
        <Expanded category="BE" skills={['Nest', 'TypeORM']}>
          <div className="mx-[0.5rem]">
            <div className="flex items-center gap-1">
              <h1>Nest</h1>
              <ProgressBar percentage={40} />
            </div>
            <span className="text-[0.9rem] text-gray-warm-6">Skill에 대한 코멘트 작성 영역</span>
          </div>
        </Expanded>
      </ContentWrapper>
    </div>
  );
};
