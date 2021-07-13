import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { MenuIcon } from "./icons/menu-icon";
import { SunIcon } from "./icons/sun-icon";
import { MoonIcon } from "./icons/moon-icon";

function DarkModeToggle() {
  // const [, setTheme] = useTheme();

  return (
    <button
      onClick={() => {
        // setTheme((previousTheme) =>
        //   previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        // );
      }}
      className="inline-flex items-center justify-center p-1 w-14 h-14 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-full transition"
    >
      <span className="block dark:hidden">
        <SunIcon />
      </span>
      <span className="dark:block hidden">
        <MoonIcon />
      </span>
    </button>
  );
}

function MenuButton() {
  return (
    <button className="inline-flex items-center justify-center p-1 w-14 h-14 text-black dark:text-white border-2 border-gray-200 dark:border-gray-600 rounded-full transition">
      <MenuIcon />
    </button>
  );
}

function NavLink({
  to,
  children,
  ...rest
}: Omit<Parameters<typeof Link>["0"], "to"> & { to: string }) {
  const location = useRouter();
  const isSelected =
    to === location.pathname || location.pathname.startsWith(`${to}/`);

  return (
    <li>
      <Link href={to} {...rest}>
        <a
          className={clsx(
            "block px-5 py-2 hover:underline whitespace-nowrap text-lg font-medium",
            {
              "text-black dark:text-white": isSelected,
              "text-gray-500": !isSelected,
            }
          )}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 lg:px-16 py-6 dark:text-white lg:py-9">
        <Link href="/">
          <a className="block hover:underline whitespace-nowrap text-2xl font-medium transition">
            <h1>Azeez Lukman</h1>
          </a>
        </Link>

        <ul className="hidden lg:flex">
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/podcast">Projects</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
          <NavLink to="/workshops">Resume</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>

        <div className="flex items-center justify-center">
          <div className="block lg:hidden">
            <MenuButton />
          </div>
          <div className="ml-4">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
