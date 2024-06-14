import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <>
      <Title>AttoLeap | 404 Page Not Found</Title>
      <main class=":uno: mx-auto h-[calc(100vh_-_72px)] bg-black p-4 text-center text-gray-200 font-sans">
        <h1 class=":uno: max-6-xs my-16 text-6xl text-gray-100 font-thin uppercase">Not Found</h1>
        <p class=":uno: mt-8 font-mono">Oops! Looks like you got lost in here</p>
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
    </>
  );
}
