import Image from "next/image";
import { MutableRefObject } from "react";
import Button from "../Button";

interface HomeProps {
    projectsRef: MutableRefObject<any>;
    contactRef: MutableRefObject<any>;
}

const Home = ({ projectsRef, contactRef }: HomeProps) => {
    const scrollTo = (ref: MutableRefObject<any>) =>
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <section
            id="home"
            className="container flex flex-col items-center justify-end min-h-screen px-6 pt-24 pb-10 m-auto bg-no-repeat xl:h-screen xl:py-0 mt-22 xl:flex-row main-hero"
        >
            <div className="relative flex items-center justify-center flex-1 h-full mt-8 overflow-hidden xl:flex-1 2xl:w-96 2xl:h-96 md:w-4/5">
                <Image
                    className="shadow-lg grayscale-0"
                    alt="Jonathan Photo"
                    width={400}
                    height={400}
                    src="/images/jonathan_photo.png"
                />
            </div>
            <div className="flex-1 xl:flex-1 ">
                <div className="absolute left-0 z-0 w-full top-10 xl:w-14 xl:left-16">
                    <div className="relative mx-auto w-14 h-14">
                        <Image
                            fill={true}
                            src="/images/logo.svg"
                            alt="logo portfolio"
                        />
                    </div>
                </div>
                <h1 className="mt-8 text-4xl text-center md:text-6xl xl:mt-0 xl:text-7xl xl:text-left font-rubik">
                    <b>Jonathan</b> Fernández Mertanen
                </h1>
                <p className="px-12 mt-6 text-lg leading-snug text-center text-md md:text-2xl xl:text-left xl:px-0 xl:text-2xl 2xl:text-3xl">
                    I'm an Information Systems Engineer, Full Stack Developer
                    and web enthusiast from Spain.
                    <br />
                    I'm currently living in Kuopio, Finland.
                </p>
                <div className="flex justify-center gap-8 xl:justify-start my-14 xl:my-0 xl:mt-12 buttons">
                    <Button
                        variant={"primary"}
                        onClick={() => {
                            scrollTo(projectsRef);
                        }}
                    >
                        Projects
                    </Button>
                    <Button
                        variant={"secondary"}
                        onClick={() => {
                            scrollTo(contactRef);
                        }}
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Home;
