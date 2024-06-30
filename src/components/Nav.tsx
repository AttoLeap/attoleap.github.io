import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import logo from "~/assets/logo.svg";

function NavLinks(props: { isColumn?: boolean }) {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname
      ? "text-color-gray-900 dark:text-color-gray-100"
      : "text-color-gray-600 dark:text-color-gray-400";

  return (
    <ul flex={`~ ${props.isColumn ? "col" : "row"}`} gap-4>
      <li class={`${active("/")}`}>
        <A href="/">Home</A>
      </li>
      <li class={`${active("/about")}`}>
        <A href="/about">About</A>
      </li>
    </ul>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const toggleMenu = () => setMenuOpen(!menuOpen());

  return (
    <>
      <nav
        flex="~ row"
        h="72px"
        w="full"
        place="items-center"
        justify="between"
        bg="white dark:black"
        p="4"
      >
        <div flex="~ row" place="items-center" gap="4">
          <A href="/">
            <img w="32px" h="32px" src={logo} object="fit" alt="Attoleap's white logo" />
          </A>
          <h1 font="brand bold" text="size-28px black dark:white">
            AttoLeap
          </h1>
        </div>
        <div place="items-center" gap="4" font="sans 600" text="size-sm" uppercase hidden md="flex">
          <NavLinks />
        </div>
        <span
          md="hidden"
          class={menuOpen() ? "i-lucide-x" : "i-lucide-menu"}
          text="size-3xl color-black dark:color-white"
          transition="~ duration-200 ease-in-out"
          onClick={toggleMenu}
        />
      </nav>
      <div
        class={menuOpen() ? "flex md:hidden" : "hidden"}
        absolute
        bg="white dark:black"
        font="600"
        text="size-3xl"
        p="16"
        w="full"
        h="[calc(100%_-_72px)]"
        transition="~ duration-200 ease-in-out"
        onClick={toggleMenu}
      >
        <NavLinks isColumn />
      </div>
    </>
  );
}
