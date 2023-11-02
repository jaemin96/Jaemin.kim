import { GithubIcon } from '@/components/icon';
import { Alink } from '@/utils';
import Image from 'next/image';
import useContacts from '../hooks/useContacts';

export const Side = () => {
  const { github, notion } = useContacts();
  return (
    <div id="side" className="w-1/4 m-[1.5rem] border-r-2 border-solid border-indigo-500">
      <div className="side_wrapper flex flex-col gap-[2rem]">
        {/* Section1. Side Title  */}
        <div className="side_wrapper-title w-full">
          <h1 className="flex justify-center w-full">{`김재민's 포트폴리오`}</h1>
        </div>
        {/* Section2. Side Profile  */}
        <div className="side_wrapper-profile">
          <div className="flex justify-center w-full">
            <Image className="rounded-full" src="/images/avatar.jpeg" alt="avatar" width={200} height={200} />
          </div>
          <ul className="flex justify-center w-full gap-2">
            <li>#abc</li>
            <li>#wqw</li>
            <li>#ggg</li>
            <li>#hhq</li>
          </ul>
        </div>
        {/* Section3. Side Social  */}
        <div className="side_wrapper-social">
          <ul className="flex justify-center w-full gap-2">
            <li>
              <Alink url={github}>
                <GithubIcon width={27} height={27} />
              </Alink>
            </li>
            <li>
              <Alink url={github}>
                <GithubIcon width={27} height={27} />
              </Alink>
            </li>
            <li>
              <Alink url={github}>
                <GithubIcon width={27} height={27} />
              </Alink>
            </li>
            <li>
              <Alink url={notion}>{}</Alink>
            </li>
          </ul>
        </div>
        {/* Section4. Side Copyright  */}
        <div className="side_wrapper-copyright">
          <span className="flex justify-center w-full">©2023. Jaemin Kim. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};
