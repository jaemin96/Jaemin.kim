import { Contact } from '../../asset';
import { Alink } from '../../utils';

export const Contacts = (props) => {
  return (
    <>
      <ul className="contacts">
        <li className="contacts_phone">
          <div className="before">
            <img src="/assets/image/Tel.svg" alt="phone" />
            <div>|</div>
          </div>
          <a href={`tel:${Contact?.phoneNumber}`}>{Contact?.phoneNumber}</a>
        </li>
        <li className="contacts_email">
          <div className="before">
            <img src="/assets/image/Email.svg" alt="email" />
            <div>|</div>
          </div>
          <a href={`mailto:${Contact?.email}`}>{Contact?.email}</a>
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
