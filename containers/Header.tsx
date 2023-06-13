import { MoreLIcon } from '@/components/icon';
import { Navigator } from '@/components/header';
import { useState } from 'react';
import { SlideModal } from '@/components/modal/slideModal';

export const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div id="header">
      <Navigator />
      <div className="expand_btn" onClick={openModal}>
        <MoreLIcon />
      </div>
      <SlideModal visible={visible} closeModal={closeModal}>
        <div>
          <h1>Modal Content</h1>
          <button onClick={closeModal}>X</button>
        </div>
      </SlideModal>
    </div>
  );
};
