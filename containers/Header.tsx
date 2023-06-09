import { MoreLIcon } from '@/components/icon';
import { Navigator } from '@/components/header';
import { useState } from 'react';
import { SlideModal } from '@/components/modal/slideModal';

export const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div id="header">
      <Navigator />
      <div onClick={handleVisible}>
        <MoreLIcon />
      </div>
      <SlideModal visible={visible}>
        <div>
          <h1>Modal Content</h1>
        </div>
      </SlideModal>
    </div>
  );
};
