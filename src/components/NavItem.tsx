interface NavItemProps {
  name: string;
  active?: boolean;
  onChangeActive: () => void;
}

const NavItem = ({ name, active }: NavItemProps) => {
  return (
    <li className="nav-item">
      <a className={`nav-link ${active ? 'active' : ''}`} href="">
        {name}
      </a>
    </li>
  );
};

export default NavItem;
