import clsx from "clsx";

export type NavItem = { label: string; href: string };

interface Props {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ item, isActive, onClick, className }: Props) => {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={clsx(
        "relative flex items-center gap-2 text-sm font-medium transition-colors",
        "text-white/80 hover:text-white",
        isActive && "text-white",
        className,
      )}
    >
      {isActive && (
        <span
          className="h-1.5 w-1.5 rounded-full bg-teal-400"
          aria-hidden="true"
        />
      )}
      {item.label}
    </a>
  );
};

export default NavLink;
