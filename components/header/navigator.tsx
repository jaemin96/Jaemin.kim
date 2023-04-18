import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About me', path: '/about' },
  { key: 'skill', label: 'Skill', path: '/skill' },
  { key: 'project', label: 'Project', path: '/projects' },
  { key: 'contact', label: 'Contact', path: '/contact' },
];

export const Navigator = () => {
  const router = useRouter();

  return (
    <ul id="nav_top">
      {navItems?.map((item, idx) => {
        return (
          <li
            className={`nav_top-item ${router.pathname === item.path ? 'selected' : ''}`}
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
