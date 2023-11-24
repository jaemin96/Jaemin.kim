import { Projects } from '@/asset/config';
import { Alink } from '@/utils';
import Image from 'next/image';
import { ContentTitle, ContentWrapper } from './module';

const MyProject = ({ thumbnail, skills, title, links, comment }) => {
  return (
    <div className="project_container sm:w-[28rem] flex mb-[1rem] last:mb-0 max-w-[50rem] sm:max-w-[23rem] mb-[1.5rem]">
      <div className="thumbnail_wrapper w-[12rem] h-[10rem] sm:w-[18rem] border-[1px] border-gray-cool-3">
        <Image className="object-contain max-h-[100%]" src={thumbnail} alt={title} width={200} height={200} />
      </div>
      <div className="info_wrapper m-[0.5rem] sm:w-full">
        <div className="flex">
          <h1 className="title">{title}</h1>
        </div>
        <div className="">{comment}</div>
        <div className="flex gap-1">
          <span>사용 기술 :</span>
          <ul className="skill_wrapper flex gap-1">
            {skills?.map((skill, i) => {
              return <li key={`${i}`}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="flex gap-1">
          <span>관련 링크 :</span>
          <ul className="flex gap-1">
            {links?.map((item, i) => {
              return (
                <li key={i}>
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
