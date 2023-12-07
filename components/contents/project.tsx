import { Projects } from '@/asset/config';
import { ThemeContext } from '@/asset/context';
import { Alink } from '@/utils';
import Image from 'next/image';
import { useContext } from 'react';
import { ContentTitle, ContentWrapper } from './module';

const MyProject = ({ thumbnail, skills, title, links, comment }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`project_container p-[1rem] flex gap-[0.2rem] last:mb-0 mb-[1rem] max-w-[40rem] sm:max-w-[22rem]  ${
        theme === 'light' ? '' : 'bg-gray-cool-9'
      }`}
    >
      <div className="thumbnail_wrapper w-[10rem] h-[8rem] mr-[1rem] border-[1px] border-gray-cool-3 sm:w-[7rem] sm:h-[5rem]">
        <Image className="object-contain max-h-[100%]" src={thumbnail} alt={title} width={200} height={200} />
      </div>
      <div className="info_wrapper text-[0.9rem] sm:w-full flex flex-col gap-[0.15rem]">
        <div className="flex flex-col mb-[0.3rem]">
          <h1 className="title text-[1.05rem] font-extrabold">{title}</h1>
          <div
            className={`text-[0.84rem] font-semibold ${theme === 'light' ? 'text-gray-warm-5' : 'text-gray-cool-3'}`}
          >
            {comment}
          </div>
        </div>
        <div className="flex gap-1 text-[0.9rem] font-semibold">
          <span>사용 기술 :</span>
          <ul className="skill_wrapper flex gap-1 text-[0.95rem]">
            {skills?.map((skill, i) => {
              return (
                <li key={`${i}`} className={`skill`}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-1 text-[0.9rem] font-semibold">
          <span>관련 링크 :</span>
          <ul className="project-links flex gap-2 text-[0.95rem]">
            {links?.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`link ${
                    theme === 'light'
                      ? 'light hover:text-gray-cool-3'
                      : 'dark hover:text-custom-Emerald hover:border-custom-Emerald sm:text-custom-Emerald sm:border-custom-Emerald'
                  }`}
                >
                  <Alink url={`${item?.url}`}>{item?.type}</Alink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <div id="project" className="sm:flex sm:flex-col sm:items-center mt-[3rem] mb-[1rem]">
      <ContentTitle>Personal Projects</ContentTitle>
      <ContentWrapper>
        {Projects?.map((data) => {
          return (
            <MyProject
              key={data?.key}
              thumbnail={data?.thumbnail}
              title={data?.title}
              comment={data?.comment}
              skills={data?.skills}
              links={data?.links}
            />
          );
        })}
      </ContentWrapper>
    </div>
  );
};
