import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="font-mono">
        <div className="xl:flex xl:gap-20 gap-8">
          <div className="mx-auto flex justify-center p-12">
            <NeonGradientCard className="max-w-80 xl:size-80 items-center justify-center text-center mb-8 xl:mb-0">
              <Image src={'/logo-light.png'} alt={''} width={50} height={50} className="size-full p-4" unoptimized />
            </NeonGradientCard>
          </div>
          <div className="">
            <h1 className="text-2xl md:text-4xl mb-4 font-bold">Razzaq Adi Wibowo</h1>
            <p className="text-sm md:text-base text-light">I am a Software Engineering graduate from Telkom University with a strong passion for web and mobile application development. My academic and practical experiences have equipped me with skills in designing and building modern, user-friendly applications. I am enthusiastic about leveraging technology to create impactful solutions and constantly strive to stay updated with the latest industry trends. With a keen eye for detail and a commitment to excellence, I am eager to contribute to innovative projects and grow as a professional in the dynamic field of software development.</p>
            <div className="flex gap-2 md:gap-6 justify-end mt-4 md:mt-8">
              <ShineBorder
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl h-fit p-2"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Button className="w-full h-full" variant={`ghost`}>
                  <Link href={`https://www.linkedin.com/in/razzaq-adi-wibowo-660216215/`}>LinkedIn</Link>
                </Button>
              </ShineBorder>
              <ShineBorder
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl h-fit p-2"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Button className="w-full h-full" variant={`ghost`} >
                  <Link href={`https://github.com/Razzaq44`} className="flex gap-2">
                    <span className="">GitHub</span>
                  </Link>
                </Button>
              </ShineBorder>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
