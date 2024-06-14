import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <Title>AttoLeap | About Us</Title>
      <main class=":uno: grid h-[calc(100vh_-_72px)] place-items-center bg-black p-4 px-[10%] text-center text-gray-700 font-sans md:px-[20%]">
        <h1 class=":uno: text-3xl text-color-gray-100 font-bold tracking-wider">
          AttoLeap is a tech startup dedicated to providing innovative solutions for valuable
          customer problems. We as an organization are passionate about giving back to opensource
          community and make it thrive as much as we can.
        </h1>
      </main>
    </>
  );
}
