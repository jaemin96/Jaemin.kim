import { ThemeContext } from '@/asset/context';
import Image from 'next/image';
import { useState, useContext } from 'react';

type ThemeMode = 'light' | 'dark';

export const ThemeSwitch = () => {
  // popup state
  const [visible, setVisible] = useState<boolean>(false);

  // theme mode state
  const { theme, setTheme } = useContext(ThemeContext);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleThemeMode = (mode: ThemeMode) => {
    try {
      setTheme(mode);
      localStorage.setItem('thememode', mode);
    } catch (error) {
      console.log({ error });
    }
    setVisible(false);
  };

  return (
    <div className="absolute top-0 right-0">
      <Image
        onClick={handleVisible}
        className="relative mx-[0.5rem] mt-[0.5rem] cursor-pointer"
        src={`${theme === 'light' ? '/images/sun-eye.png' : '/images/sun-glasses.png'}`}
        alt="화면모드"
        width={40}
        height={40}
        priority={true}
      />
      {/* 모드 변경 팝업창 레이아웃 */}
      <ul
        className={`${visible || 'hidden'} ${theme === 'light' ? 'bg-gray-cool-1' : 'bg-custom-gray'}
        absolute top-0 right-0 mt-[3.5rem] flex flex-col font-bold theme_switch-popup m-[1rem] border w-[10rem] z-50  shadow-lg rounded-lg`}
      >
        <li
          onClick={() => handleThemeMode('light')}
          className={`flex gap-2 justify-center align-center w-full h-[100%] px-[1rem] py-[0.7rem] ${
            theme === 'light' ? 'hover:bg-gray-warm-2' : 'hover:bg-custom-Emerald hover:text-custom-dark'
          } border-b-[0.1rem] rounded-t-lg cursor-pointer`}
        >
          <Image
            className="object-contain"
            src={`/images/sun-eye.png`}
            alt="라이트 모드"
            width={30}
            height={30}
            priority={true}
          />
          <span className="leading-loose">light mode</span>
        </li>
        <li
          onClick={() => handleThemeMode('dark')}
          className={`flex gap-2 justify-center align-center w-full px-[1rem] py-[0.7rem] ${
            theme === 'light' ? 'hover:bg-gray-warm-2' : 'hover:bg-custom-Emerald hover:text-custom-dark'
          } rounded-b-lg cursor-pointer`}
        >
          <Image
            className="object-contain"
            src={`/images/sun-glasses.png`}
            alt="다크 모드"
            width={30}
            height={30}
            priority={true}
          />
          <span className="leading-loose">dark mode</span>
        </li>
      </ul>
    </div>
  );
};
