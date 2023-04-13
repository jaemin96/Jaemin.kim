import Link from 'next/link';

const navItems = [
  { key: 'about', label: 'About me' },
  { key: 'skill', label: 'Skill' },
  { key: 'project', label: 'Project' },
  { key: 'career', label: 'Career' },
  { key: 'contact', label: 'Contact' },
];

export const Navigator = () => {
  return (
    <ul id="nav">
      {navItems?.map((item, idx) => {
        return (
          <li className="" key={`navItems__${idx}__${item.key}`}>
            <Link href={`/${item.key}`}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
