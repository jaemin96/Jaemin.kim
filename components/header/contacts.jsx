import { Contact } from '../../asset';
import { Alink } from '../../utils';

export const Contacts = (props) => {
  return (
    <div id="contacts">
      <ul className="contact">
        <li className="contact-phone">
          <div className="before">
            <img src="/assets/image/Tel.svg" alt="phone" />
            <div>|</div>
          </div>
          <a href={`tel:${Contact?.phoneNumber}`}>{Contact?.phoneNumber}</a>
        </li>
        <li className="contact-email">
          <div className="before">
            <img src="/assets/image/Email.svg" alt="email" />
            <div>|</div>
          </div>
          <a href={`mailto:${Contact?.email}`}>{Contact?.email}</a>
        </li>
      </ul>
      <ul className="social">
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
    </div>
  );
};
