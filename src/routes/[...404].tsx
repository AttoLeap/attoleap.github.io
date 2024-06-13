import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class=":uno: bg-black h-[calc(100vh_-_72px)] font-sans text-center mx-auto text-gray-200 p-4">
      <h1 class=":uno: max-6-xs text-6xl text-gray-100 font-thin uppercase my-16">Not Found</h1>
      <p class=":uno: font-mono mt-8">Oops! Looks like you got lost in here</p>
      <p class=":uno: my-4">
        <A href="/" class=":uno: text-orange-400 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/about" class=":uno: text-orange-400 hover:underline">
          About Page
        </A>
      </p>
    </main>
  );
}
