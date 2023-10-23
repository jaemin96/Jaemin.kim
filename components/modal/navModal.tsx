import { useContacts } from '@/hooks';
import { Alink } from '@/utils';
import { Email2Icon, GithubIcon } from '../icon';
import { Navigator } from '../navigator';

type NavModalProps = {
  closeModal: () => void;
};

export const NavModal = (props: NavModalProps) => {
  const { closeModal } = props;
  const { email, github } = useContacts();

  return (
    <div className="modal-nav w-[100%]">
      <div className="modal-nav-header flex justify-between p-[1.5rem]">
        <div></div>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal-nav-content p-[1.5rem]">
        <Navigator option="flex-col items-center slide-modal" />
      </div>
      <div className="modal-nav-footer p-[1.5rem] w-full flex justify-center">
        <ul className="contact-items flex gap-[0.8rem]">
          <li>
            <Alink url={github}>
              <GithubIcon width={25} height={25} />
            </Alink>
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
