import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
  isActive: string;
  setIsActive: (value: string) => void;
};
export const NavItem = ({
  href,
  label,
  isActive,
  setIsActive,
}: NavItemProps): JSX.Element => {

  const pathname = usePathname()

  return (
    <button
      className={`bg-neutral-950 bg-opacity-20 ${
        pathname === href ? " border border-neutral-700" : ""
      } transition-all ease-in-out delay-1000 duration-1000 hover:bg-gradient-to-t hover:from-neutral-800 hover:via-neutral-950 hover:to-neutral-950  px-2 py-1 rounded-full`}
    >
      <Link
        href={href}
        className="bg-clip-text bg-gradient-to-b from-slate-500 px-5 py-2 to-slate-50  inline-block text-transparent"
      >
        {label}
      </Link>
    </button>
  );
};
