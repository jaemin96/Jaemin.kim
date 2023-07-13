import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const navItems = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About me', path: '/about' },
  { key: 'skill', label: 'Skill', path: '/skill' },
  { key: 'project', label: 'Project', path: '/projects' },
  { key: 'contact', label: 'Contact', path: '/contact' },
];

type NavigatorProps = {
  option?: string;
};

export const Navigator = (props: NavigatorProps) => {
  const { option } = props;
  const router = useRouter();
  const { pathname } = router;
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    if (pathname === '/') {
      setSelected('/');
    } else if (pathname === '/about') {
      setSelected('/about');
    } else if (pathname === '/skill') {
      setSelected('/skill');
    } else if (pathname === '/projects') {
      setSelected('/projects');
    } else if (pathname === '/contact') {
      setSelected('/contact');
    }
  }, [router, pathname]);

  return (
    <ul className={`navigator flex gap-[1rem] ${option}`}>
      {navItems?.map((item, idx) => {
        return (
          <li
            className={`navigator-item ${selected === item.path ? 'selected' : ''}`}
            key={`navItems__${idx}__${item.key}`}
          >
            <Link className="nav_link" href={`${item.path}`}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
