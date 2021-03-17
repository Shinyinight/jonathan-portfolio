import Image from 'next/image';
import { MutableRefObject } from 'react';

interface HomeProps {
	projectsRef: MutableRefObject<any>;
	contactRef: MutableRefObject<any>;
}

export default function Home({ projectsRef, contactRef }: HomeProps) {
	const scrollTo = (ref: MutableRefObject<any>) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

	return (
		<section
			id="home"
			className="flex flex-col-reverse items-center justify-end px-12 pt-24 bg-no-repeat xl:h-screen xl:pt-0 mt-22 xl:flex-row xl:pl-24 2xl:pl-44 main-hero"
		>
			<div className="xl:flex-1 xl:mr-28 2xl:mr-40 left-column">
				<img src="logo.svg" alt="logo" className="absolute w-16 top-10 left-8 xl:w-auto xl:left-16" />
				<h1 className="mt-8 text-4xl text-center md:text-6xl xl:mt-0 xl:text-7xl xl:text-left font-alegreya 2xl:text-8xl">
					Hi, I'm <b>Jonathan</b>
				</h1>
				<p className="px-12 mt-6 text-xl leading-snug text-center md:text-2xl xl:text-left xl:px-0 text-1xl xl:text-3xl 2xl:text-4xl">
					I'm an Information Systems Engineer, Full Stack Developer and web enthusiast from Granada, Spain.
				</p>
				<div className="flex justify-center gap-8 xl:justify-start my-14 xl:my-0 xl:mt-12 buttons">
					<button
						onClick={() => {
							scrollTo(projectsRef);
						}}
						className="px-10 py-2 text-xl font-bold tracking-wide rounded shadow-xl md:px-12 md:py-3 xl:py-3 xl:text-xl xl:px-14 gradient-1 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
					>
						Projects
					</button>
					<button
						onClick={() => {
							scrollTo(contactRef);
						}}
						className="px-10 py-2 text-xl font-bold tracking-wide rounded shadow-xl xl:py-3 xl:text-xl xl:px-14 gradient-2 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
					>
						Contact
					</button>
				</div>
			</div>
			<div className="flex justify-center xl:flex-1 right-column">
				<img className="md:w-4/5 " src="hero-image.png" alt="hero-image" />
			</div>
		</section>
	);
}
