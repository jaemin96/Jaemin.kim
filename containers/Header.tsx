import { MenuIcon } from '@/components/icon';
import { useState, useEffect } from 'react';
import { SlideModal } from '@/components/modal/layout/slideModal';
import { useRouter } from 'next/router';
import { Navigator } from '@/components/navigator';
import { Logo } from '@/components/logo';
import { NavModal } from '@/components/modal';

export const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const router = useRouter();
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    closeModal();
  }, [router, router.asPath]);

  return (
    <div id="header" className="flex p-[2rem]">
      <div className="header_wrapper grid grid-cols-[30%,1fr,10%] w-full">
        <Logo />
        <Navigator option="sm:hidden" />
        <div className="expand hidden sm:flex sm:col-start-3 sm:col-end-4">
          <a className="expand_btn" onClick={openModal}>
            <MenuIcon />
          </a>
        </div>
      </div>
      <SlideModal visible={visible} closeModal={closeModal}>
        <NavModal closeModal={closeModal} />
      </SlideModal>
    </div>
  );
};
