import { useState } from 'react';

type Contacts = {
  email: string;
  github: string;
  notion: string;
};

const useContacts = (): Contacts => {
  const [email] = useState('mailto:lemon__96@naver.com');
  const [github] = useState('https://github.com/jaemin96');
  const [notion] = useState('https://receptive-option-330.notion.site/FE-2e8bee584473476696917dcb1e9198c2?pvs=4');

  return { email, github, notion };
};

export default useContacts;
