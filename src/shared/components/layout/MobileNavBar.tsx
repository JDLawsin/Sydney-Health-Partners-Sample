import clsx from "clsx";
import { X } from "lucide-react";
import NavLink, { NavItem } from "../elements/NavLink";

interface Props {
  items: NavItem[];
  activeHref?: string;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavBar = ({ items, activeHref, isOpen, onClose }: Props) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-72 bg-primary transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-semibold">{"Menu"}</span>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  isActive={activeHref === item.href}
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-lg hover:bg-white/10"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNavBar;
