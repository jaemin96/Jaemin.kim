interface Project {
  key: string;
  title: string;
  myAct: string[];
}

interface WorkExperience {
  key: string;
  company: string;
  during: string;
  projects?: Project[];
  contributes?: string[];
}

export const WorkExperiences: WorkExperience[] = [
  {
    key: '하버엑스',
    company: '(주)하버엑스',
    during: '21. 06 ~ 23. 09',
    projects: [{ key: 'woori-sool', title: '우리술', myAct: ['프로젝트 기여 1', '프로젝트 기여 2'] }],
    contributes: ['프로젝트 경험 1', '프로젝트 경험 2'],
  },
];
