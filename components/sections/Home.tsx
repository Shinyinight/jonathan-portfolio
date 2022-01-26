import Image from 'next/image';
import { MutableRefObject } from 'react';

interface HomeProps {
	projectsRef: MutableRefObject<any>;
	contactRef: MutableRefObject<any>;
}

const Home = ({ projectsRef, contactRef }: HomeProps) => {
	const scrollTo = (ref: MutableRefObject<any>) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

	return (
		<section
			id="home"
			className="container flex flex-col items-center justify-end min-h-screen px-6 pt-24 pb-10 m-auto bg-no-repeat xl:h-screen xl:py-0 mt-22 xl:flex-row main-hero"
		>
			<div className="relative flex items-center justify-center flex-1 h-full mt-8 overflow-hidden xl:flex-1 2xl:w-96 2xl:h-96 md:w-4/5">
				<div className="relative w-56 h-56 bg-white border-8 border-white rounded-full shadow-lg xl:w-96 xl:h-96">
					<Image
						className="overflow-visible rounded-full shadow-lg grayscale-0"
						alt="Jonathan Photo"
						width={400}
						height={400}
						src="/images/jonathan_photo.png"
					/>
				</div>
			</div>
			<div className="flex-1 xl:flex-1 ">
				<div className="absolute left-0 z-0 w-full top-10 xl:w-14 xl:left-16">
					<div className="relative mx-auto w-14 h-14">
						<Image layout="fill" objectFit="contain" src="/images/logo.svg" alt="logo portfolio" />
					</div>
				</div>
				<h1 className="mt-8 text-4xl text-center md:text-6xl xl:mt-0 xl:text-7xl xl:text-left font-rubik">
					Hi, I'm <b>Jonathan</b>
				</h1>
				<p className="px-12 mt-6 text-xl leading-snug text-center md:text-2xl xl:text-left xl:px-0 text-1xl xl:text-3xl 2xl:text-4xl">
					I'm an Information Systems Engineer, Full Stack Developer and web enthusiast from Spain.
					<br />
					I'm currently living in Kuopio, Finland.
				</p>
				<div className="flex justify-center gap-8 xl:justify-start my-14 xl:my-0 xl:mt-12 buttons">
					{/* <button
						onClick={() => {
							scrollTo(projectsRef);
						}}
						className="px-10 py-2 text-xl font-bold tracking-wide rounded shadow-xl md:px-12 md:py-3 xl:py-3 xl:text-xl xl:px-14 button-primary focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
					>
						Projects
					</button> */}
					<button
						onClick={() => {
							scrollTo(contactRef);
						}}
						className="px-10 py-2 text-xl font-bold tracking-wide rounded shadow-xl xl:py-3 xl:text-xl xl:px-14 button-primary focus:outline-none focus:ring-4 focus:ring-white focus:border-transparent"
					>
						Contact
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
