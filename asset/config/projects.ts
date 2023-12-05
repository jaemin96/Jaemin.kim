interface Links {
  type: string;
  url: string;
}

interface ProjectInfo {
  key: string;
  type: 'FE' | 'BE' | 'App';
  thumbnail: string;
  title: string;
  skills: string[];
  links: Links[];
  comment: string;
}

export const Projects: ProjectInfo[] = [
  {
    key: 'web-portfolio',
    type: 'FE',
    title: '웹 포트폴리오 페이지',
    comment: '개인 웹 포트폴리오 사이트 제작',
    skills: ['TS', 'Next.js', 'tailwindcss'],
    thumbnail: '/images/project-portfolio_thumbnail.png',
    links: [
      { type: 'Github', url: 'https://github.com/jaemin96/Jaemin.kim' },
      { type: 'Notion', url: 'https://www.notion.so/4e8f3668611945ab8ab9c33a5e955475?pvs=4' },
    ],
  },
];
