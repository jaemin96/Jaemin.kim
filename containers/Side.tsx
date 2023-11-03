import { GithubIcon, NotionIcon } from '@/components/icon';
import { Alink } from '@/utils';
import Image from 'next/image';
import useContacts from '../hooks/useContacts';

export const Side = () => {
  const { github, notion } = useContacts();

  const tagItems = ['React', 'Web', 'FE', '기록'];

  return (
    <div
      id="side"
      className="w-1/4 m-[1.5rem] border-r-2 border-solid border-gray-warm-3 sm:w-full sm:mx-auto sm:border-0"
    >
      <div className="side_wrapper flex flex-col gap-[2rem] h-full justify-between">
        <div className="pt-[8rem] sm:pt-[3rem] flex flex-col gap-[3rem]">
          {/* Section1. Side Title  */}
          <div className="side_wrapper-title w-full">
            <h1 className="flex justify-center w-full font-bold text-[1.5rem]">{`김재민's 포트폴리오`}</h1>
          </div>
          {/* Section2. Side Profile  */}
          <div className="side_wrapper-profile flex flex-col gap-[1rem]">
            <div className="flex justify-center w-full">
              <Image className="rounded-full" src="/images/avatar.jpeg" alt="avatar" width={200} height={200} />
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
            <ul className="flex justify-center w-full gap-[1rem]">
              <li className="social-icons">
                <Alink url={github}>
                  <GithubIcon width={30} height={30} />
                </Alink>
              </li>
              <li className="social-icons">
                <Alink url={notion}>
                  <NotionIcon width={30} height={30} />
                </Alink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Section4. Side Copyright  */}
          <div className="side_wrapper-copyright">
            <span className="flex justify-center w-full text-gray-warm-4">©2023. Jaemin Kim. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
