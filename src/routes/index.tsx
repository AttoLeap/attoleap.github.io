import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <>
      <Title>AttoLeap | Bridging the gaps between Hype and Reality.</Title>
      <main
        h="[calc(100vh_-_72px)]"
        bg="white dark:black"
        grid
        my="auto"
        place="items-center"
        font="sans"
        text="center"
      >
        <h1
          font="bold"
          class="dark:color-gray-100"
          text="size-2xl color-gray-900 dark:color-gray-100"
          md:w="70vw"
          md:text="size-4xl"
          md:line-height="6rem"
        >
          Bridging the gaps between Hype and Reality.
        </h1>
      </main>
    </>
  );
}
