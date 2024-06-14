import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <>
      <Title>AttoLeap | Leaping Beyond Boundaries</Title>
      <main
        h="[calc(100vh_-_72px)]"
        bg="black"
        grid
        my="auto"
        place="items-center"
        font="sans"
        text="center"
      >
        <h1
          font="700"
          text="size-4xl color-gray-100"
          line-height-relaxed
          tracking-wider
          md:w="50vw"
          md:text="size-7xl"
          md:line-height="6rem"
        >
          Leaping Beyond Boundaries
        </h1>
      </main>
    </>
  );
}
