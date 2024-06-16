import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <>
      <Title>AttoLeap | Leaping Beyond Boundaries</Title>
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
          font="800"
          class="dark:color-gray-100"
          text="size-4xl color-gray-900 dark:color-gray-100"
          md:w="50vw"
          md:text="size-4xl"
          md:line-height="6rem"
        >
          Leaping Beyond Boundaries
        </h1>
      </main>
    </>
  );
}
