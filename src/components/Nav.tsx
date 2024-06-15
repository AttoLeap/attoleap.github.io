import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import logo from "~/assets/dark-logo.svg";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname ? "text-color-gray-100" : "text-color-gray-400";

  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <nav flex="~ row" h="72px" w="full" place="items-center" justify="between" bg="black" p="4">
      <div flex="~ flex-row" place="items-center" gap="4">
        <A href="/">
          <img w="32px" h="32px" src={logo} alt="Attoleap's white logo" />
        </A>
        <h1 font="brand 900" text="size-28px white" tracking-wide>
          attoleap
        </h1>
      </div>
      <ul place="items-center" gap="4" font="sans 600" text="size-sm" uppercase hidden md="flex">
        <li class={`${active("/")}`}>
          <A href="/">Home</A>
        </li>
        <li class={`${active("/about")}`}>
          <A href="/about">About</A>
        </li>
      </ul>
      <span
        md="hidden"
        class={menuOpen() ? "i-lucide-x" : "i-lucide-menu"}
        text="color-white size-3xl"
        transition="ease-in-out"
        onClick={() => setMenuOpen(!menuOpen())}
      />
    </nav>
  );
}
