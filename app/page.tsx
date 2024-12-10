import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Home() {
  return (
    <>
      <div className="flex">
        <NeonGradientCard className="w-fit items-center justify-center text-center">
          <Image src={'/logo-light.png'} alt={''} width={50} height={50} className="size-60" unoptimized />
        </NeonGradientCard>
        <div className="">
          <ShineBorder
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl h-fit p-2"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Button className="w-full h-full" variant={`ghost`}>GitHub</Button>
          </ShineBorder>
          <ShineBorder
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl h-fit p-2"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <Button className="w-full h-full" variant={`ghost`}>GitHub</Button>
          </ShineBorder>
        </div>
      </div>
    </>
  );
}
