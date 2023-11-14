import { Alink } from '@/utils';
import { ContentTitle, ContentWrapper } from './module';

// TODO: 사용 기술 스타일 정의, MyProject 컴포넌트 모듈 분리

interface Links {
  type: string;
  url: string;
}

type MyProjectProps = {
  thumbnail: string;
  title: string;
  skills: string[];
  links: Links[];
  comment: string;
};

const MyProject = ({ thumbnail, skills, title, links, comment }: MyProjectProps) => {
  return (
    <div className="project_container sm:w-[28rem] flex border-2 mb-[1rem] last:mb-0">
      <div className="thumbnail_wrapper w-[12rem] h-[10rem] border-2 sm:w-[18rem]">{thumbnail}</div>
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
      <ContentTitle>Project</ContentTitle>
      <ContentWrapper>
        <MyProject
          thumbnail="@"
          title="웹 포트폴리오 페이지"
          comment="프로젝트 소개 1"
          skills={['react', 'scss', 'ts']}
          links={[
            { type: 'Github', url: 'github.com' },
            { type: 'Notion', url: 'notion.so' },
          ]}
        />
        <MyProject
          thumbnail="@"
          title="커넥트월렛"
          comment="프로젝트 소개 2"
          skills={['react', 'scss', 'ts']}
          links={[
            { type: 'Github', url: 'github.com' },
            { type: 'Notion', url: 'notion.so' },
          ]}
        />
      </ContentWrapper>
    </div>
  );
};
