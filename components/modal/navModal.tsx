import React from 'react';
import { Navigator } from '../navigator';

type NavModalProps = {
  closeModal: () => void;
};

export const NavModal = (props: NavModalProps) => {
  const { closeModal } = props;
  return (
    <div className="modal-nav w-[100%]">
      <div className="flex justify-between p-[1.5rem]">
        <h1>Modal Content</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <Navigator option="flex-col items-center" />
    </div>
  );
};
