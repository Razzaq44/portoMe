import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Image src={'/logo-light.png'} alt={''} width={50} height={50} />
    </>
  );
}
