import useWindowDimensions from 'hooks/useWindowDimensions';
import { MutableRefObject, useRef, useState } from 'react';

interface ProjectsProps {
	projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
	const work1 = useRef(null);
	const [scroll, setScroll] = useState(0);
	const { height, width } = useWindowDimensions();

	return (
		<section ref={projectsRef} className="relative min-h-screen py-16 xl:py-40 projects bg-dark">
			<h1 className="text-4xl font-bold xl:text-5xl font-rubik text-center">Projects</h1>
			<div className="relative w-screen overflow-hidden">
				<div className="flex overflow-x-scroll gap-10 scrollbar-hide pb-4" ref={work1}>
					<article className="min-w-full flex flex-col-reverse gap-28 xl:flex-row mt-24 work px-12 xl:px-40">
						<img
							className="flex-shrink-0 object-cover mt-12 xl:mt-0 xl:w-[800px] ring-8 ring-gray-900 rounded"
							src="images/work1.png"
							alt="project-image"
						/>
						<div className="flex-1 description">
							<h2 className="mt-6 text-xl font-bold xl:mt-8 xl:text-4xl font-alegreya">
								Plenion - Fullstack
							</h2>
							<p className="mt-6 text-2xl xl:mt-12 xl:text-3xl">
								3 years working on The Cloud Gate S.L in Granada developing a SaaS (Plenion 24/7) for
								Plenion, a Belgium organization that provides ERP facilities for the construction
								environment. This SaaS provides an API (developed in Java and Google Cloud) to integrate
								Cloud functionalities from Microsoft and Google into Plenion systems, mainly files,
								calendar and tasks. In addition, we provide a web application as a portal for customers
								to access this information. This web application is developed in Angular.
							</p>
							<div className="flex gap-10 mt-16">
								<div className="relative">
									<img
										src={`/images/angular.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/angular.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
								<div className="relative">
									<img
										src={`/images/java.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/java.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
								<div className="relative">
									<img
										src={`/images/google-cloud.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/google-cloud.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
							</div>
						</div>
					</article>
					<article className="min-w-full flex flex-col-reverse gap-28 xl:flex-row mt-24 work px-12 xl:px-40">
						<img
							className="flex-shrink-0 object-cover mt-12 xl:mt-0 xl:w-[800px] max-h-[750px] h-[750px] ring-8 ring-gray-900 rounded"
							src="images/work2_2.png"
							alt="project-image"
						/>
						<div className="flex-1 description">
							<h2 className="mt-6 text-xl font-bold xl:mt-8 xl:text-4xl font-alegreya">
								Bedroom Radio - Fullstack
							</h2>
							<div className="mt-4">
								<a
									href="https://bedroomradio.es"
									target="_blank"
									className="texl-xl xl:text-xl xl:underline xl:underline-offset-2 hover:text-blue-400">
									Bedroom Radio
								</a>
							</div>
							<p className="mt-6 text-2xl xl:mt-8 xl:text-3xl">
								Bedroom Radio is a project focused on bringing and discovering hispanic artists to
								people. The objective is to give voice and a safe space to emergent artists that have
								not much visibility. The application is built in Next.js and it plays a music playlist
								fetched from our own server. The backend is developed in Strapi CMS. It is used to add
								songs and playlists and many other functionalities that are shown in the application.
							</p>
							<div className="flex gap-10 mt-16">
								<div className="relative">
									<img
										src={`/images/react.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/react.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
								<div className="relative bg-white rounded-full ring-2 ring-white">
									<img
										src={`/images/nextjs.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
								</div>
								<div className="relative">
									<img
										src={`/images/strapi.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/strapi.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
							</div>
						</div>
					</article>
					<article className="min-w-full flex flex-col-reverse gap-28 xl:flex-row mt-24 work px-12 xl:px-40">
						<img
							className="flex-shrink-0 object-cover mt-12 xl:mt-0 xl:w-[800px] max-h-[750px] h-[750px] ring-8 ring-gray-900 rounded"
							src="images/work3_1.png"
							alt="project-image"
						/>
						<div className="flex-1 description">
							<h2 className="mt-6 text-xl font-bold xl:mt-8 xl:text-4xl font-alegreya">
								GTAV Private server - Fullstack
							</h2>
							<div className="mt-4">
								<a
									href="https://despistaos.es"
									target="_blank"
									className="texl-xl xl:text-xl xl:underline xl:underline-offset-2 hover:text-blue-400">
									DespistaosRP
								</a>
							</div>
							<p className="mt-6 text-2xl xl:mt-8 xl:text-3xl">
								One of the biggest spanish communities of Grand Theft Auto Roleplay. I was part of this
								group of developers and designers that developed a private roleplay server for GTA V.
								The server was built in NodeJS and it used a Chromium embedded instance to show the
								interface, developed in React Component oriented. We worked with designers that would
								create the interfaces ingame before making them into code.
							</p>
							<div className="flex gap-10 mt-16">
								<div className="relative">
									<img
										src={`/images/node.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/node.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
								<div className="relative">
									<img
										src={`/images/react.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/react.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
							</div>
						</div>
					</article>
					<article className="min-w-full flex flex-col-reverse gap-28 xl:flex-row mt-24 work px-12 xl:px-40">
						<img
							className="flex-shrink-0 object-cover mt-12 xl:mt-0 xl:w-[800px] max-h-[750px] h-[750px] ring-8 ring-gray-900 rounded"
							src="images/work4_1.png"
							alt="project-image"
						/>
						<div className="flex-1 description">
							<h2 className="mt-6 text-xl font-bold xl:mt-8 xl:text-4xl font-alegreya">
								This Portfolio - Fullstack
							</h2>
							<div className="mt-4">
								<a
									href="https://github.com/jonathanfernandezfm/portfolio-v2"
									target="_blank"
									className="texl-xl xl:text-xl xl:underline xl:underline-offset-2 hover:text-red-600">
									Github
								</a>
							</div>
							<p className="mt-6 text-2xl xl:mt-8 xl:text-3xl">
								I built this porfolio to show my work, what I know and a bit of information about me. It
								is developed in Next.js. It uses the Next API server to send an email form aswell as
								other funcitonalities outside of this page.
							</p>
							<div className="flex gap-10 mt-16">
								<div className="relative">
									<img
										src={`/images/react.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/react.png`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								</div>
								<div className="relative bg-white rounded-full ring-2 ring-white">
									<img
										src={`/images/nextjs.png`}
										alt="logo"
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
			{scroll > 0 && (
				<div
					className="absolute left-10 top-1/2 rotate-180 hover:cursor-pointer hover:bg-slate-900 rounded-full"
					onClick={() => {
						work1.current.scrollTo({
							top: 0,
							left: width * (scroll - 1) + (scroll - 1 > 0 ? 50 : -50),
							behavior: 'smooth',
						});
						if (scroll !== 0) setScroll(scroll - 1);
					}}>
					<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
							fill="white"
							fillRule="evenodd"
							clipRule="evenodd"></path>
					</svg>
				</div>
			)}
			{scroll < 3 && (
				<div
					className="absolute right-10 top-1/2 hover:cursor-pointer hover:bg-slate-900 rounded-full"
					onClick={() => {
						work1.current.scrollTo({
							top: 0,
							left: width * (scroll + 1) + 25 * scroll,
							behavior: 'smooth',
						});
						if (scroll !== 4) setScroll(scroll + 1);
					}}>
					<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
							fill="white"
							fillRule="evenodd"
							clipRule="evenodd"></path>
					</svg>
				</div>
			)}
		</section>
	);
};

export default Projects;
