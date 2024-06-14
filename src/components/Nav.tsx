import { useLocation } from "@solidjs/router";
import logo from "../assets/dark-logo.svg";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path === location.pathname ? "text-color-gray-100" : "text-color-gray-400";
  return (
    <nav class=":uno: h-72px w-full flex flex-row place-items-center justify-between bg-black px-16 py-8">
      <div class=":uno: flex flex-row place-items-center gap-4">
        <a href="/">
          <img width="32px" height="32px" src={logo} alt="Attoleap's white logo" />
        </a>
        <h1 class=":uno: text-size-[24px] font-900 font-brand" text-color="white" tracking-wider>
          attoleap
        </h1>
      </div>
      <ul class=":uno: flex place-items-center gap-4 text-lg font-600 font-sans">
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
