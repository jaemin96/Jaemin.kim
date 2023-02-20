import { Contact } from '../../asset';
import { Alink } from '../../utils';

export const Contacts = (props) => {
  console.log({ Contact });
  return (
    <ul className="contacts">
      <li className="contacts_phone">
        <img src="/assets/image/Tel.svg" alt="phone" />
        <div>⎟</div>
        <span>{Contact?.phoneNumber}</span>
      </li>
      <li className="contacts_email">
        <img src="/assets/image/Email.svg" alt="email" />
        <div>⎟</div>
        <span>{Contact?.email}</span>
      </li>
      <li className="contacts_social">
        <ul>
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
      </li>
    </ul>
  );
};
