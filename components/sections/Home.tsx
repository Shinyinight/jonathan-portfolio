import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { RefObject } from "react";
import Button from "../client/Button";

interface HomeProps {
	projectsRef?: RefObject<HTMLElement>;
	contactRef?: RefObject<HTMLElement>;
}

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Home = ({ projectsRef, contactRef }: HomeProps) => {
	return (
		<section
			id="home"
			className="container flex flex-col items-center justify-end min-h-screen gap-10 px-6 pt-24 pb-10 m-auto bg-no-repeat xl:h-screen xl:py-0 mt-22 xl:flex-row main-hero"
		>
			<div className="relative flex items-center justify-center flex-1 h-full mt-8 overflow-hidden image-hero xl:flex-1 2xl:w-96 2xl:h-[650px] md:w-4/5">
				<Image
					className="shadow-lg grayscale-0 xl:w-[600px] w-[250px]"
					alt="Jonathan Photo"
					width={600}
					height={600}
					src="/images/jonathan_photo.png"
				/>
			</div>
			<div className="flex-1 xl:flex-1">
				<div className="absolute left-0 z-0 w-full top-10 xl:w-14 xl:left-16">
					<div className="relative mx-auto w-14 h-14">
						<Image fill={true} src="/images/logo.svg" alt="Logo portfolio" />
					</div>
				</div>
				<h1
					className={`${dmSerifDisplay.className} mt-8 text-4xl text-center md:text-6xl xl:mt-0 xl:text-7xl xl:text-left`}
				>
					<b className={"text-5xl xl:text-7xl"}>Jonathan</b> Fernández Mertanen
				</h1>
				<p className="px-12 mt-6 text-lg leading-snug text-center text-md md:text-2xl xl:text-left xl:px-0 xl:text-2xl 2xl:text-3xl">
					Information Systems Engineer, Full Stack Developer and web enthusiast
					from Spain looking for new challenges and horizons.
				</p>
				<p className="px-12 mt-6 text-lg leading-snug text-center group text-md md:text-2xl xl:text-left xl:px-0 xl:text-2xl 2xl:text-3xl">
					Currently based in{" "}
					<span className="group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r from-cyan-500 to-blue-100">
						Kuopio
					</span>
					,{" "}
					<span className="group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r from-blue-100 to-cyan-500">
						Finland
					</span>{" "}
					and working at
				</p>
				<p className="flex mt-4">
					<a href="https://www.efecte.com/" target="_blank" rel="noreferrer">
						<img
							alt="Efecte logo"
							width="100"
							src="https://www.efecte.com/hubfs/2021%20website/logos/Efecte_logo.png"
						/>
					</a>
				</p>
				<div className="flex justify-center gap-4 xl:gap-8 xl:justify-start my-14 xl:my-0 xl:mt-12 buttons">
					<Button variant={"primary"} idToScroll="projects">
						Projects
					</Button>
					<Button variant={"secondary"} idToScroll="contact">
						Contact
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Home;
