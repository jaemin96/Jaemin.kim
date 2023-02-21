import { Contact } from '../../asset';
import { Alink } from '../../utils';

export const Contacts = (props) => {
  console.log({ Contact });
  return (
    <>
      <ul className="contacts">
        <li className="contacts_phone">
          <div className="before">
            <img src="/assets/image/Tel.svg" alt="phone" />
            <div>|</div>
          </div>
          <span>{Contact?.phoneNumber}</span>
        </li>
        <li className="contacts_email">
          <div className="before">
            <img src="/assets/image/Email.svg" alt="email" />
            <div>|</div>
          </div>
          <span>{Contact?.email}</span>
        </li>
      </ul>
      <ul className="contacts_social">
        {Contact?.social?.map((element) => {
          return (
            <li key={element?.key}>
              <Alink url={element?.url}>
                <img src={element?.src} alt={element?.value} />
              </Alink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
