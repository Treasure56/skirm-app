
import { paths } from "@/utils";
import Link from "next/link";

export function MobileNav({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <aside
      className={`bg-light md:hidden text-text-light fixed flex flex-col gap-20 top-0 h-screen w-full transition-all duration-500 p-4 z-30 pb-20 ${open
        ? "left-0"
        : "-left-full"}`}
      aria-label="Navigation Bar"
    >
      <div className="flex items-center justify-between">
        <Link href={paths.home}>SkirmApp</Link>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-dark rotate-45 rounded" />
            <span className="w-6 h-0.5 bg-dark -rotate-45 rounded relative -top-1.5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {
          navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-lg font-semibold hover:text-primary hover:underline"
            >
              {link.title}
            </Link>
          ))
        }
      </div>
      <div className="flex-grow" />
    </aside>
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
