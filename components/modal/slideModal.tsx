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
        <div className={`slideModal ${visible ? 'open' : ''}`}>
          <div className="slideModal-overlay" onClick={handleOutsideClick}>
            <div className="slideModal-content">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
