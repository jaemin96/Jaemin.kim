import Link from 'next/link';
import { NavItems } from '../../asset';

export const Navigator = () => {
  return (
    <ul id="nav">
      {NavItems?.map((item, idx) => {
        return (
          <li className="nav__item" key={`navItems__${idx}__${item.key}`}>
            <Link href={`/${item.key}`}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
