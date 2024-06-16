import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <>
      <Title>AttoLeap | 404 Page Not Found</Title>
      <main
        h="[calc(100vh_-_72px)]"
        mx="auto"
        bg="white dark:black"
        p="4"
        font="sans"
        text="center gray-800 dark:gray-200"
      >
        <h1 my="16" text="size-6xl gray-800 dark:gray-100" font="thin" uppercase>
          Not Found
        </h1>
        <p class="mt-2 font-mono">Oops! Looks like you got lost in here</p>
        <p class="my-4">
          <A href="/" class="text-orange-400 hover:underline">
            Home
          </A>
          {" - "}
          <A href="/about" class="text-orange-400 hover:underline">
            About Page
          </A>
        </p>
      </main>
    </>
  );
}
