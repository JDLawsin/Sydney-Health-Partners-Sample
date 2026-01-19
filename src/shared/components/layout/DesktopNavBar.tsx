import NavLink, { NavItem } from "../elements/NavLink";

interface Props {
  activeHref?: string;
  items: NavItem[];
}

const DesktopNavBar = ({ items, activeHref }: Props) => {
  return (
    <nav className="hidden md:block" aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink
              item={item}
              isActive={activeHref?.startsWith(item.href) || false}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavBar;
