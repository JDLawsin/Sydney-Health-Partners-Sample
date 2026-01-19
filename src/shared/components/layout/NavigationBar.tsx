"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../elements/NavLink";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const NAV_ITEMS: NavItem[] = [
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Programs", href: "/programs" },
  { label: "Training and Events", href: "/training-and-events" },
  { label: "News", href: "/news" },
  { label: "About us", href: "/about-us" },
];

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

// Single responsibility: hamburger menu toggle button
const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-white/80 hover:text-white transition-colors md:hidden"
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Menu className="h-6 w-6" />
    </button>
  );
};

interface Props {
  activeHref?: string;
}

// Main navigation component - composes all navigation elements
const NavigationBar = ({ activeHref }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-center md:justify-start md:ml-8">
          <div className="absolute left-4 md:hidden">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          <DesktopNavBar items={NAV_ITEMS} activeHref={activeHref} />

          <span className="text-white font-medium text-sm md:hidden">
            {NAV_ITEMS.find((item) => item.href === activeHref)?.label ||
              "Menu"}
          </span>
        </div>
      </div>

      <MobileNavBar
        items={NAV_ITEMS}
        activeHref={activeHref}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </div>
  );
};

export default NavigationBar;
