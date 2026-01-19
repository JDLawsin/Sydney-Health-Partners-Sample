"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarIllustration from "../SidebarIllustration";

interface SidebarItem {
  label: string;
  href: string;
}

interface Props {
  items: SidebarItem[];
  className?: string;
}

interface SidebarNavItemProps {
  item: SidebarItem;
  isActive: boolean;
}

const SidebarNavItem = ({ item, isActive }: SidebarNavItemProps) => {
  return (
    <Link
      href={item.href}
      className={clsx(
        "block rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors",
        isActive
          ? "bg-secondary from-secondary to-secondary/70 text-secondary-foreground"
          : "text-primary hover:bg-muted",
      )}
    >
      {item.label}
    </Link>
  );
};

const ContentSideBar = ({ items, className }: Props) => {
  const pathname = usePathname();

  return (
    <aside className={clsx("w-full md:border-r-2", className)}>
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <SidebarNavItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
      <SidebarIllustration />
    </aside>
  );
};

export default ContentSideBar;
export type { SidebarItem, Props };
