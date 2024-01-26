import { ThemeSwitch } from '@/components/button';
import { GithubIcon, NotionIcon, Email2Icon } from '@/components/icon';
import { Alink } from '@/utils';
import Image from 'next/image';
import useContacts from '../hooks/useContacts';
import { useContext } from 'react';
import { ThemeContext } from '@/asset/context';

export const Side = () => {
  const { github, notion, email } = useContacts();
  const { theme } = useContext(ThemeContext);

  const tagItems = ['React', 'Web', 'FE', '기록'];

  return (
    <div
      id="side"
      className={`relative flex-[25%] md:flex-[30%] lg:flex-[20%] sm:flex-3 p-[1.5rem] pr-[1.5rem] sm:my-auto border-r-2 border-solid border-gray-warm-3 sm:w-full sm:mx-auto sm:border-r-0 ${
        theme === 'light' ? 'bg-custom-light' : 'bg-custom-gray text-custom-light'
      }`}
    >
      <div className="side_wrapper flex flex-col  gap-[2rem] h-full sm:min-h-[85%] justify-between">
        <div className="pt-[8rem] sm:pt-[5rem] flex flex-col gap-[3rem]">
          {/* Section1. Side Title  */}
          <div className="side_wrapper-title text-center gap-[0.5rem] w-full font-bold text-[1.5rem]">
            <span>기록하는 개발자 김재민</span>
          </div>
          {/* Section2. Side Profile  */}
          <div className="side_wrapper-profile flex flex-col gap-[1rem]">
            <div className="flex justify-center w-full">
              <Image
                className="rounded-full"
                src="/images/avatar.jpeg"
                alt="avatar"
                width={200}
                height={200}
                priority={true}
              />
            </div>
            <ul className="tag-wrapper flex justify-center w-full gap-2 max-w-md">
              {tagItems?.map((item, index) => {
                return (
                  <li className="tag" key={`tag_${index}_${item}`}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Section3. Side Social  */}
          <div className="side_wrapper-social pt-[0.5rem]">
            <ul className="flex justify-center w-full gap-[1.3rem]">
              <li className={`social-icons ${theme === 'light' ? 'light' : 'dark'}`}>
                <Alink url={email}>
                  <Email2Icon width={30} height={30} />
                </Alink>
              </li>
              <li className={`social-icons ${theme === 'light' ? 'light' : 'dark'}`}>
                <Alink url={github}>
                  <GithubIcon width={30} height={30} />
                </Alink>
              </li>
              <li className={`social-icons ${theme === 'light' ? 'light' : 'dark'}`}>
                <Alink url={notion}>
                  <NotionIcon width={30} height={30} />
                </Alink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Section4. Side Copyright  */}
          <div className="side_wrapper-copyright sm:hidden">
            <span
              className={`flex justify-center w-full text-nowrap text-gray-warm-6 ${
                theme === 'dark' && 'text-gray-cool-5'
              }`}
            >
              ©2024. Jaemin Kim. All rights reserved.
            </span>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};
