"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../elements/Button";
import NavigationBar from "./NavigationBar";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="cursor-pointer">
              <Image src="/logo/logo.png" alt="" width={48} height={48} />
            </Link>
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-semibold text-primary">
                {"Sydney"}
              </span>
              <span className="text-base sm:text-lg font-semibold text-primary">
                {"Health Partners"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium  text-black">
              {"Log in"}
            </Link>
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Button
              variant="secondary"
              className="rounded-full text-sm font-medium px-5 py-3"
            >
              {"Contact Us"}
            </Button>
          </div>
        </div>
      </div>

      <NavigationBar activeHref={pathname} />
    </header>
  );
};

export default Header;
