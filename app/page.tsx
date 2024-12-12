import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Link from "next/link";
import Meteors from "@/components/ui/meteors";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Home() {
  return (
    <>
      <div className="font-serif">
        <section id="home">
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
                  color={["#6A5ACD", "#F08080", "#FFE4B5"]}
                >
                  <Button className="w-full h-full" variant={`ghost`}>
                    <Link href={`https://www.linkedin.com/in/razzaq-adi-wibowo-660216215/`}>LinkedIn</Link>
                  </Button>
                </ShineBorder>
                <ShineBorder
                  className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl h-fit p-2"
                  color={["#1E90FF", "#FF6347", "#DAA520"]}
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
        </section>

        {/* NEXT II */}

        <section className="border-y-2 border-double mt-10 lg:mt-20" id="myProject">
          <div className="my-10 lg:my-20">
            <h1 className="text-xl md:text-3xl mb-4 font-bold">My Project</h1>
            <div className="mt-2">
              <Accordion type="single" className="w-full" defaultValue="dkampus">
                <AccordionItem value="dkampus">
                  <AccordionTrigger className="text-lg lg:text-xl font-semibold hover:no-underline">DKampus - Backend</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm lg:text-base text-justify">Dkampus is a web application I developed for my thesis to improve coordination between users and couriers in consignment services (jastip) around Telkom University. It features a Firebase-powered live chat integrated with Laravel, enabling real-time communication and seamless order management. This project enhanced my skills in backend development, database integration, and user-centered design. <span className="text-red-700">Unfortunately, the platform is no longer operational.</span></p>
                    <Link href={`www.dkampus.my.id`}><p className="text-end mt-4 text-blue-400">www.dkampus.my.id</p></Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="rshop" className="border-0">
                  <AccordionTrigger className="text-lg lg:text-xl font-semibold hover:no-underline">RShop - Demo</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm lg:text-base text-justify">RShop is a demo e-commerce application I developed using Next.js to showcase a modern and efficient online shopping experience. The platform includes features like product browsing, a dynamic shopping cart, and a responsive design to ensure usability across devices. This project allowed me to refine my skills in building scalable web applications with Next.js, implementing state management, and enhancing user experience through intuitive design. <span className="text-red-700">Still On Progress Developing</span></p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* NEXT III */}

        <section className="" id="aboutMe">
          <div className="my-10 lg:py-20">
            <h1 className="text-xl md:text-3xl mb-4 font-bold text-end">About Me</h1>
            <p className="mb-6 text-justify indent-8">One of my most rewarding experiences was leading the backend development for Dkampus, an online food delivery platform supporting local businesses around Telkom University. By integrating Firebase with Laravel, I helped implement a real-time live chat feature, bridging communication gaps between users and couriers. In addition to development, I&apos;ve served as a Lab Assistant, mentoring students in web programming, mobile app development, and software testing. I&apos;ve guided them in building projects using frameworks like Laravel and tools like Flutter and Firebase, ensuring they understand the importance of quality in every step of development. With proficiency in HTML, PHP, JavaScript, Flutter, and more, I&apos;m always eager to take on new challenges and contribute to innovative projects that make a difference.</p>
            <h1 className="text-lg font-semibold text-center mb-2">My Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6 gap-y-4">
              <div className="">
                <h1 className="font-semibold">Backend Developer - Dkampus Project</h1>
                <h4 className="italic">September 2023 - June 2024</h4>
                <ul className="list-disc ml-5">
                  <li>Led backend development for Dkampus, an online food delivery platform connecting users with MSMEs around Telkom University.</li>
                  <li>Integrated Firebase with Laravel to implement a real-time live chat feature, enhancing communication between users and couriers.</li>
                </ul>
              </div>
              <div className="">
                <h1 className="font-semibold">Lab Assistant - Telkom University</h1>
                <h4 className="italic">September 2023 - Present</h4>
                <ul className="list-disc ml-5">
                  <li>Guided students in developing web applications, focusing on both front-end and back-end using the Laravel framework.</li>
                  <li>Mentored students in mobile app development with Flutter and Firebase, ensuring they could create functional, user-friendly applications.</li>
                  <li>Conducted sessions on software testing with tools like Jira, Katalon Studio, and JMeter, emphasizing the importance of rigorous testing practices.</li>
                </ul>
              </div>

            </div>
            <div className="flex-wrap md:justify-between items-center md:flex w-full" id="contact">
              <div className="text-center">
                <Link href={`https://drive.google.com/file/d/14-SPUdnhmHoV2Xx9fAJ0J6pVaxNsieC6/view?usp=sharing`} target="_blank" className="my-auto text-blue-400">Download My CV <ArrowCircleDownIcon /></Link>
              </div>
              <div className="flex gap-2 items-center justify-center mt-3 md:mt-0">
                <Link href={`https://api.whatsapp.com/send/?phone=6281220104061&text&type=phone_number&app_absent=0`} target="_blank">
                  <Button variant={`default`} size={`icon`}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                    </svg>
                  </Button>
                </Link>
                <Link href={`mailto:razzaq.bowo@gmail.com`} className="" target="_blank">
                  <Button variant={`default`} size={`icon`} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                  </Button>
                </Link>
                <Link href={`https://www.linkedin.com/in/razzaq-adi-wibowo-660216215/`} className="" target="_blank">
                  <Button variant={`default`} size={`icon`} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT IV */}

        <section className="border-t-2 border-double">
          <div className="my-10 lg:my-20">

            <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
              <Meteors number={60} />
              <div className="flex flex-wrap mb-6 gap-8 items-center pt-2 w-full justify-center p-4">
                <div className="h-6 md:h-8 lg:h-10">
                  <svg viewBox="0 -.11376601 49.74245785 51.31690859" xmlns="http://www.w3.org/2000/svg" className="size-full"><path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20" /></svg>
                </div>
                <div className="h-6 md:h-8 lg:h-10">
                  <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 303.258" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="m13.104 287.306c-5.204 0-6.717-3.03-6.717-7.57 0-1.513.19-3.22.424-5.018 1.14-7.851 3.923-12.343 10.64-12.343 4.543 0 6.758 2.032 6.758 5.722v1.799h4.507c.05 0 .05-1.656.05-2.033 0-5.392-3.265-10.506-11.308-10.506-10.929 0-15.423 5.937-17.079 17.576-.237 1.562-.379 3.02-.379 4.576 0 6.86 2.699 13.1 12.349 13.1 7.332 0 11.687-3.575 14.24-7.975l-4.306-2.9c-2.79 4.401-5.82 5.572-9.179 5.572zm29.57-21.668c-8.754 0-12.536 4.492-13.813 13.432a23.325 23.325 0 0 0 -.24 3.124c0 5.77 2.697 10.362 10.17 10.362 8.754 0 12.587-4.685 13.864-13.486.142-1.134.237-2.175.237-3.215.002-5.865-2.788-10.217-10.218-10.217zm3.643 13.435c-.947 6.483-2.979 8.47-6.814 8.47-3.073 0-4.586-1.278-4.586-5.11 0-.947.096-2.081.284-3.36.947-6.433 2.839-8.42 6.718-8.42 3.123 0 4.682 1.277 4.682 5.156 0 .946-.096 2.035-.284 3.264zm28.58-21.246-1.465 8.685c-.094.755-.046.504.24 1.214-1.372-1.04-3.834-1.728-5.49-1.728-7.854 0-12.252 3.555-13.67 13.49a19.414 19.414 0 0 0 -.237 3.171c0 7.241 4.257 9.94 9.98 9.94 2.416 0 4.78.05 6.623-1.509l.471 2.943h4.543l5.298-36.206zm-4.494 28.342c-2.127 1.274-4.207 1.562-5.484 1.562-3.454 0-4.4-1.799-4.4-4.683 0-1.089.142-2.363.333-3.739 1.086-7.521 3.5-8.848 6.623-8.848 2.032 0 3.592.333 5.062 1.139zm24.603-20.531c-8.66 0-12.725 4.113-14.099 13.432-.144 1.137-.239 2.226-.239 3.266 0 6.387 3.266 10.22 10.454 10.22 5.583 0 9.75-2.32 11.972-6.578l-4.779-1.94c-1.37 2.08-3.215 3.5-6.48 3.5-3.5 0-4.92-.942-4.92-4.065 0-.616.048-1.511.143-1.511h17.076c.24-2.414.52-4.12.52-5.535 0-4.728-1.796-10.79-9.648-10.79zm3.263 11.499h-10.408c1.043-2.414 2.79-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.046 1.728-.143 1.728zm24.591-12.069.567-4.827h-13.343l-.565 4.827h3.5l-3.782 24.137h-3.505l-.564 4.828h13.34l.57-4.828h-3.503l3.783-24.137zm27.11 7.241 1.705-4.827h-4.589l-3.309.683c-1.846-1.18-4.354-2.066-6.717-2.066-6.768 0-12.537 3.268-12.537 10.697 0 2.084.756 3.766 1.653 4.903-1.416.755-2.647 2.02-2.647 3.726 0 .756.282 1.53.852 2.238-2.841 1.706-4.586 4.533-4.586 7.842 0 6.39 6.669 7.753 11.778 7.753 6.433 0 14.099-1.47 14.099-9.655 0-2.79-1.75-4.97-6.812-5.916l-9.13-1.706c-1.04-.191-1.277-.522-1.277-.995 0-.71.43-1.086 1.136-1.086l.616.094c1.23.283 2.65.427 4.115.427 6.578 0 12.443-2.84 12.443-10.22 0-1.042-.188-1.747-.661-2.884.803.38 1.846.995 2.268.995h1.6zm-13.007 19.583c1.796.333 2.41.994 2.41 2.177 0 3.833-4.116 4.306-7.095 4.306-4.542 0-6.244-1.086-6.244-3.502 0-2.13.613-3.121 2.035-4.637zm-1.943-12.392c-2.744 0-4.258-.992-4.258-3.36 0-3.5 2.035-5.535 5.583-5.535 2.839 0 4.212 1.183 4.212 3.498 0 3.502-1.989 5.397-5.537 5.397zm31.757-13.862c-2.65 0-5.013 1.3-7.948 3.616l-.425-1.772h-5.206l-3.642 26.55h6.292l2.745-20.134c1.846-1.135 4.115-2.783 6.055-2.783 2.364 0 3.218 1.141 3.218 3.316 0 .521-.05 2.064-.145 2.631l-2.315 16.97h6.293l2.315-17.108c.096-.8.19-2.119.19-2.874.003-4.5-2.129-8.412-7.427-8.412zm19.38 21.743.048-.65 2.742-19.249h-10.456l-.659 4.827h4.586c-.379 0-.615.423-.661.804l-1.893 12.82c-.094.617-.14 1.901-.14 2.418 0 3.311 1.796 5.682 5.484 5.682h3.218l.71-4.828h-2.033c-.712 0-.946-1.257-.946-1.824zm4.067-29.554h-6.15c-.379 0-.379-1.393-.425-.92l-.854 6.802c-.049.428-.049 1.36.33 1.36h6.153c.379 0 .379-1.654.425-2.084l.854-5.25c.048-.473.048.092-.333.092zm12.831 29.715c-1.559 0-2.317-.663-2.317-2.08l.048-.097 1.987-13.056h7.19l2.175-4.827h-8.704l1.465-10.623-6.62 2.117-1.185 8.506h-3.831l-.661 4.827h4.446c-.425 2.414-.852.848-.898 1.323l-1.704 11.448c-.094.522-.094.9-.094 1.371 0 4.495 3.311 6.177 7.289 6.177 3.688 0 6.669-1.077 8.989-3.02l-2.935-3.61c-1.47.897-2.462 1.544-4.64 1.544zm23.087-21.904c-8.657 0-12.725 4.113-14.098 13.432-.142 1.137-.237 2.226-.237 3.266 0 6.387 3.264 10.22 10.454 10.22 5.583 0 9.75-2.32 11.97-6.578l-4.777-1.94c-1.37 2.08-3.217 3.5-6.483 3.5-3.498 0-4.92-.942-4.92-4.065 0-.616.051-1.511.146-1.511h17.077c.236-2.414.52-4.12.52-5.535 0-4.728-1.797-10.79-9.652-10.79zm3.266 11.499h-10.408c1.04-2.414 2.788-6.15 6.387-6.15 2.79 0 4.164 1.631 4.164 4.422-.003.473-.049 1.728-.143 1.728zm23.797-11.5c-2.271 0-4.4 1.302-6.53 3.332l-.378-1.487h-5.202l-3.644 26.55h6.34l2.79-20.56c1.657-.991 3.549-1.838 5.347-1.838 1.137 0 2.223-.181 3.263-.04l.809-5.485c-.951-.189-1.897-.471-2.795-.471zm-160.665-26.827c-14.32-6.19-27.72-21.922-27.752-38.019-.039-17.55 11.083-32.45 24.916-42.242-1.663 6.283-2.57 12.03 1.55 17.65 3.83 5.225 10.538 7.764 16.872 6.386 14.8-3.24 15.479-19.51 6.705-28.989-8.675-9.387-17.067-19.99-13.765-33.603 1.653-6.824 5.843-13.216 11.151-17.785-4.08 10.722 7.514 21.296 15.153 26.563 13.251 9.138 27.79 16.044 39.974 26.756 12.816 11.258 22.28 26.48 20.369 44.135-2.071 19.136-17.277 32.445-34.333 39.164 36.042-7.955 73.283-35.928 74.046-75.9.632-32.885-21.927-58.193-49.872-72.682l-1.46-.797c.767 1.861 1.018 3.444.989 4.861a17 17 0 0 0 .468-3.227 15.728 15.728 0 0 1 -.512 3.9l.044-.673a16.383 16.383 0 0 1 -2.069 4.931l.41-.441c-5.575 9.247-20.668 11.255-28.124 1.68-11.986-15.402.251-32.008 1.963-48.318 2.143-20.441-10.676-40.285-26.57-52.16 8.754 14.161-2.779 32.896-12.006 43.37-8.947 10.153-19.828 18.63-29.705 27.855-10.61 9.908-20.81 20.345-29.531 31.974-17.442 23.276-28.12 52.55-20.273 81.588 7.842 29.018 32.978 47.49 61.363 54.022z" fill="#ee4323" /></svg>
                </div>
                <div className="h-6 md:h-8 lg:h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-full p-1" fill="none" viewBox="0 0 394 80">
                    <path fill="currentColor" className="dark:fill-white" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" />
                    <path fill="currentColor" className="dark:fill-white" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" />
                  </svg>
                </div>
                <div className="h-6 md:h-8 lg:h-10">
                  <svg className="size-full" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" /><circle cx="420.9" cy="296.5" r="45.7" /></g></svg>
                </div>
                <div className="h-6 md:h-8 lg:h-10">
                  <svg viewBox=".15 .13 799.7 479.69" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z" fill="#06b6d4" /></svg>
                </div>
                <div className="h-6 md:h-8 lg:h-10">
                  <svg viewBox=".29 .22 77.26 95.75" className="size-full" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z" fill="#02539a" /><g fill="#45d1fd"><path d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z" fill-opacity=".85" /><path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z" /></g></g></svg>
                </div>

              </div>
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-4xl">
                Razzaq Adi Wibowo
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
