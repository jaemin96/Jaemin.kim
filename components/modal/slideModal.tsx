import { ReactNode } from 'react';

type SlideModalProps = {
  children: ReactNode;
  visible?: boolean;
};

export const SlideModal = (props: SlideModalProps) => {
  const { visible } = props;

  return (
    <>
      {visible && (
        <div>
          <div>{props.children}</div>
        </div>
      )}
    </>
  );
};
