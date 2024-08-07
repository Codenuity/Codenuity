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
  const pathname = usePathname();

  return (
    <button
      className={`bg-neutral-950 bg-opacity-20 ${
        pathname === href ? "border border-neutral-700" : ""
      } rounded-full py-1 transition-all delay-1000 duration-1000 ease-in-out hover:bg-gradient-to-t hover:from-neutral-800 hover:via-neutral-950 hover:to-neutral-950`}
    >
      <Link
        href={href}
        className="inline-block bg-gradient-to-b from-slate-500 to-slate-50 bg-clip-text px-2 2xl:px-5 py-2 text-transparent"
      >
        {label}
      </Link>
    </button>
  );
};
