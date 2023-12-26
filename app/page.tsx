import Image from "next/image";

export default function Home() {
  return (
    <main
      role="main"
      className="flex shrink-0 flex-col items-center justify-center space-y-4 py-12"
    >
      <Image src={"/img/logo.png"} width={355} height={78} alt="" />
      <Image src={"/img/description.png"} width={500} height={23} alt="" />
    </main>
  );
}
