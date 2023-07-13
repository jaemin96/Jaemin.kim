import React, { ReactNode } from 'react';

type SlideModalProps = {
  children: ReactNode;
  visible?: boolean;
  closeModal: () => void;
};

export const SlideModal = (props: SlideModalProps) => {
  const { visible, closeModal } = props;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {visible && (
        <div className={`slideModal ${visible ? 'open' : ''} absolute right-0 top-0 w-[100%] h-[100vh] lg:hidden`}>
          <div
            className="slideModal-overlay flex justify-end w-[100%] h-[100%] bg-black/70"
            onClick={handleOutsideClick}
          >
            <div className="slideModal-content flex w-[80%] h-[100%] z-50 bg-sky-200">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
