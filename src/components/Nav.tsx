import { useLocation } from "@solidjs/router";
import logo from "../assets/logo_white.svg";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname ? "text-color-gray-100" : "text-color-gray-400";
  return (
    <nav class=":uno: bg-black w-full h-72px flex flex-row place-items-center justify-between px-16 py-8">
      <div class=":uno: flex flex-row gap-4 place-items-center">
        <a href="/">
          <img width="32px" height="32px" src={logo} alt="Attoleap's white logo"></img>
        </a>
        <h1 class=":uno: font-brand font-900 text-size-[24px]" text-color="white" tracking-wider>
          attoleap
        </h1>
      </div>
      <ul class=":uno: flex place-items-center gap-4 font-sans font-600 text-lg">
        <li class={`:uno: ${active("/")}`}>
          <a href="/">Home</a>
        </li>
        <li class={`:uno: ${active("/about")}`}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
