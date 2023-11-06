import Image from 'next/image';

/*TODO:
 * 1. 모드 변경 이미지를 클릭했을 때 팝업의 상태를 on/off 할수있도록 []
 * 2. 모드 리스트를 클릭했을 때 현재 선택된 모드 상태관리 []
 * 3. 모드 팝업 스타일링 (테두리, 그림자, 레이아웃 전체적인 부분을 의미) []
 */

export const ThemeSwitch = () => {
  // TODO: Set - dark & light set function 추가
  return (
    // TODO: 팝업창과 버튼을 가지고 있는 모듈 컴포넌트를 생성해야함.
    <div className="absolute top-0 right-0">
      <Image
        className="relative mx-[1rem]"
        src={`/images/sun-eye.png`}
        alt="라이트 모드"
        width={40}
        height={40}
        priority={true}
      />
      {/* 모드 변경 팝업창 레이아웃 */}
      <ul className="absolute top-0 right-0 mt-[3.5rem] flex flex-col font-bold theme_switch-popup m-[1rem] border w-[10rem] z-50 bg-gray-cool-1">
        <li
          onClick={() => {
            console.log('라이트 모드');
          }}
          className="flex gap-2 justify-center align-center w-full h-[100%] px-[1rem] py-[0.7rem] "
        >
          <Image
            className="object-contain"
            src={`/images/sun-eye.png`}
            alt="라이트 모드"
            width={30}
            height={30}
            priority={true}
            layout="fixed"
          />
          <span className="leading-loose">light mode</span>
        </li>
        <li
          onClick={() => {
            console.log('다크 모드');
          }}
          className="flex gap-2 justify-center align-center w-full px-[1rem] py-[0.7rem]"
        >
          <Image
            className="object-contain"
            src={`/images/sun-glasses.png`}
            alt="다크 모드"
            width={30}
            height={30}
            priority={true}
            layout="fixed"
          />
          <span className="leading-loose">dark mode</span>
        </li>
      </ul>
    </div>
  );
};
