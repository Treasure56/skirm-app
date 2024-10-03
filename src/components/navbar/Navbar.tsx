"use client";
/* eslint-disable @next/next/no-img-element */
import { paths } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MobileNav } from "./MobileNav";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <header className="h-16 w-full flex justify-between items-center app-container py-2">
      <div className="w-fit flex items-center gap-2">
        <h1 className="font-semibold">SkirmApp</h1>
      </div>
      <nav className="flex gap-4 h-full items-center max-md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className=" font-[500] hover:text-primary transition-all duration-300"
          >
            {link.title}
          </Link>
        ))}
      </nav>
      {/* <Link
        href={paths.admin}
        className="btn-primary  !px-5 !py-2 !text-light hover:!text-light !border-primary !rounded-[10px]"
      >
        Dashboard
        <BsArrowRight />
      </Link> */}
      <button className=" md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <RiMenu3Line />
      </button>
      <MobileNav open={isOpen} setOpen={setIsOpen} />
    </header>
  );
}

const navLinks = [
  {
    title: "Home",
    href: paths.home + "#Home",
  },
  {
    title: "About Us",
    href: paths.home + "#About",
  },
  {
    title: "Contact Us",
    href: paths.home + "#Contact",
  },
];
