import React from 'react';
import { Email2Icon, GithubIcon } from '../icon';
import { Navigator } from '../navigator';
import { useState, useEffect } from 'react';

type NavModalProps = {
  closeModal: () => void;
};

export const NavModal = (props: NavModalProps) => {
  const { closeModal } = props;
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    setEmail('lemon__96@naver.com');
  }, []);

  return (
    <div className="modal-nav w-[100%]">
      <div className="modal-nav-header flex justify-between p-[1.5rem]">
        <h1>Modal Content</h1>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal-nav-content">
        <Navigator option="flex-col items-center" />
      </div>
      <div className="modal-nav-footer">
        <ul className="contact-items">
          <li>
            <GithubIcon width={25} height={25} />
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <Email2Icon width={25} height={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
