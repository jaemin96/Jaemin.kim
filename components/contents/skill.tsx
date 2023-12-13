import { ContentTitle, ContentWrapper, SkillDetail } from '@/components/contents/module';
import { ReactNode, useContext, useState } from 'react';
import { ThemeContext } from '@/asset/context';
import { Skills } from '@/asset/config';

type ExpandProps = {
  multiple?: boolean;
  skills: string[];
  category: string;
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
          <span className="font-extrabold">{`${category} : `}</span>
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

export const Skill = () => {
  return (
    <div id="skill" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Skill</ContentTitle>
      <ContentWrapper>
        {/* SKILL - Part. Language  */}
        <Expand category="LANGUAGE" skills={['Javascript', 'Typescript']}>
          {Skills.filter((skill) => skill.key === 'Language')[0]?.skillList?.map((data) => {
            return (
              <SkillDetail key={data?.key} skill={data?.skill} percentage={data?.percentage}>
                {data?.comment}
              </SkillDetail>
            );
          })}
        </Expand>
        {/* SKILL - Part. FE  */}
        <Expand category="FRONT-END" skills={['HTML', 'CSS', 'React', 'Next']}>
          {Skills.filter((skill) => skill.key === 'FE')[0]?.skillList?.map((data) => {
            return (
              <SkillDetail key={data?.key} skill={data?.skill} percentage={data?.percentage}>
                {data?.comment}
              </SkillDetail>
            );
          })}
        </Expand>
        <Expand category="BACK-END" skills={['Node', 'TypeORM']}>
          {Skills.filter((skill) => skill.key === 'BE')[0]?.skillList?.map((data) => {
            return (
              <SkillDetail key={data?.key} skill={data?.skill} percentage={data?.percentage}>
                {data?.comment}
              </SkillDetail>
            );
          })}
        </Expand>
      </ContentWrapper>
    </div>
  );
};
