interface Project {
  key: string;
  title: string;
  intro: string;
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
    company: '(주) 하버엑스',
    during: '21. 06 ~ 23. 09',
    projects: [
      {
        key: 'woori-sool',
        title: '우리술',
        intro: '전통주 쇼핑몰 앱',
        myAct: ['관리자 페이지 기획 및 UI/UX 구현', 'API 구현 및 DB관리 등 서버 업무 보조'],
      },
      {
        key: 'connect-wallet',
        title: 'Connect-Wallet',
        intro: '블록체인 마켓플레이스 웹',
        myAct: ['클라이언트 페이지 UI/UX 개선 및 구현 담당', '스마트 컨트렉트 통합 작업 (web3 사용)'],
      },
      {
        key: 'metah',
        title: 'Meta:H',
        intro: '블록체인 기반 실시간 도로 위험정보 서비스 앱',
        myAct: ['관리자 웹 페이지 UI/UX 개선 및 구현 담당', '스마트 컨트렉트 통합 작업 (wagmi 사용)'],
      },
    ],
    contributes: [
      'UI/UX 디자인 작업을 전담하여 디자이너와 맨투맨 협업을 진행하였고 프로젝트 UI 개선 및 디자인 일관성을 유지함',
      'FE개발자로서 UI/UX 개발을 담당하였으며 부가적으로 BE개발자의 업무를 도와 업무 트래픽을 최소화함',
    ],
  },
];
