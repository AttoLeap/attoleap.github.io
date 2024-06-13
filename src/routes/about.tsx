import { MetaProvider, Title } from "@solidjs/meta";

export default function About() {
  return (
    <>
      <MetaProvider>
        <Title>AttoLeap | About Us</Title>
      </MetaProvider>
      <main class=":uno: h-[calc(100vh_-_72px)] bg-black grid place-items-center font-sans text-center px-[10%] md:px-[20%] text-gray-700 p-4">
        <h1 class=":uno: font-bold tracking-wider text-3xl text-color-gray-100">
          AttoLeap is a tech startup dedicated to providing innovative solutions for valuable
          customer problems. We as an organization are passionate about giving back to opensource
          community and make it thrive as much as we can.
        </h1>
      </main>
    </>
  );
}
