import { useState } from 'react';

type Contacts = {
  tel: string;
  email: string;
  github: string;
  notion: string;
};

const useContacts = (): Contacts => {
  const [tel] = useState('010-4731-9889');
  const [email] = useState('lemon__96@naver.com');
  const [github] = useState('https://github.com/jaemin96');
  const [notion] = useState('https://www.notion.so/portfolio-jaemin/11bd18125d0c462db8356ee877bce503');

  return { tel, email, github, notion };
};

export default useContacts;
