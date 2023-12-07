type Category = 'LANGUAGE' | 'FRONT-END' | 'BACK-END';

type SkillList = {
  key: string;
  skill: string;
  percentage: number;
  comment: string;
};

interface SkillsInfo {
  key: string;
  category: Category;
  skillList: SkillList[];
}

export const Skills: SkillsInfo[] = [
  {
    key: 'Language',
    category: 'LANGUAGE',
    skillList: [
      {
        key: 'js',
        skill: 'Javascript',
        percentage: 90,
        comment: 'ES6+ 문법을 주로 사용하며 사용에 익숙한 수준입니다',
      },
      {
        key: 'ts',
        skill: 'Typescript',
        percentage: 50,
        comment: 'type이나 interface를 통해 정적으로 타입을 정의해서 사용하고 있으며 지속적으로 학습하고 있습니다',
      },
    ],
  },
  {
    key: 'FE',
    category: 'FRONT-END',
    skillList: [
      {
        key: 'html',
        skill: 'HTML',
        percentage: 90,
        comment: '기본적인 태그에 대한 이해도가 있으며 실제 사용에도 익숙한 수준입니다',
      },
      {
        key: 'css',
        skill: 'CSS',
        percentage: 90,
        comment: 'CSS에 대한 이해도가 높은 편이며 SCSS, tailwindcss 등 다양한 CSS 전처리기 사용 경험이 있습니다',
      },
      {
        key: 'react',
        skill: 'React',
        percentage: 85,
        comment: '함수형 코드를 주로 사용하며 기본적인 hook에 대한 이해와 사용에 익숙한 수준입니다',
      },
      {
        key: 'next',
        skill: 'Next',
        percentage: 50,
        comment: 'SSR과 성능최적화에 초점을 두고 지속적으로 학습하고 있습니다',
      },
    ],
  },
  {
    key: 'BE',
    category: 'BACK-END',
    skillList: [
      {
        key: 'node',
        skill: 'Node',
        percentage: 50,
        comment: 'express.js 와 nest.js 프레임워크 사용 경험이 있습니다',
      },
      {
        key: 'typeORM',
        skill: 'TypeORM',
        percentage: 60,
        comment: 'Entity정의, 관계설정, 쿼리작성 등 기본적인 설정과 사용이 가능한 정도입니다',
      },
      {
        key: 'aws',
        skill: 'AWS',
        percentage: 60,
        comment: '기본 사용에 익숙하며 S3, cloud-front, parameter-store를 주로 사용했습니다',
      },
    ],
  },
];
