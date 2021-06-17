import { MouseEventHandler } from 'react';

interface NavItemProps {
  name: string;
  active?: boolean;
  onChangeActive: () => void;
}

const NavItem = ({ name, active, onChangeActive }: NavItemProps) => {
  const changeActive: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    onChangeActive();
  };

  return (
    <li className="nav-item">
      <a className={`nav-link ${active ? 'active' : ''}`} onClick={changeActive}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
