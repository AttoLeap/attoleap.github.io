import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <Title>AttoLeap | About Us</Title>
      <main
        h="[calc(100vh_-_72px)]"
        bg="black"
        grid
        place="items-center"
        p="4"
        px="[10%]"
        text="center gray-700"
        font="sans"
        md:px="[20%]"
      >
        <h1 font="bold" text="size-3xl color-gray-100" tracking-wider>
          AttoLeap is a tech startup dedicated to providing innovative solutions for valuable
          customer problems. We as an organization are passionate about giving back to opensource
          community and make it thrive as much as we can.
        </h1>
      </main>
    </>
  );
}
