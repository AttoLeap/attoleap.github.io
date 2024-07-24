import { A, useLocation } from "@solidjs/router";
import logo from "~/assets/logo.svg";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
  return (
    <nav class="w-full h-[64px] bg-zinc-900 flex flex-row justify-between items-center px-[4%]">
      <A class="flex place-items-center gap-3" href="/">
        <img width={32} height={32} src={logo} />
        <h1 class="text-2xl font-medium leading-none">AttoLeap</h1>
      </A>
      <ul class="flex h-full items-center text-gray-200">
        <li class={`flex h-full items-center border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`flex h-full items-center border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <A href="/about">About</A>
        </li>
      </ul>
    </nav>
  );
}
