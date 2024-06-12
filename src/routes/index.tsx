import { MetaProvider, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <>
      <MetaProvider>
        <Title>Attoleap | Leaping Beyond Boundaries</Title>
      </MetaProvider>
      <main
        class=":uno:"
        grid
        place-items-center
        font="sans"
        text="center"
        my-auto
        h="[calc(100vh_-_72px)]"
        p="4"
        bg="black"
      >
        <h1
          class=":uno:"
          md:w="50vw"
          font-700
          md:text-7xl
          text-4xl
          line-height-relaxed
          tracking-wider
          md:line-height="6rem"
          text-white
        >
          Leaping Beyond Boundaries
        </h1>
      </main>
    </>
  );
}
