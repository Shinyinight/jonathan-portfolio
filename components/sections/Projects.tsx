import { MutableRefObject } from 'react';

interface ProjectsProps {
	projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
	return (
		<section
			ref={projectsRef}
			className="flex flex-col-reverse min-h-screen px-12 py-16 xl:flex-row xl:py-40 xl:px-40 projects bg-dark"
		>
			<img
				className="flex-shrink-0 object-cover mt-12 xl:mt-0 xl:w-96"
				src="placeholder.png"
				alt="project-image"
			/>
			<div className="flex-1 xl:text-right description">
				<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">Projects (WIP)</h1>
				<h2 className="mt-6 text-xl font-bold xl:mt-8 xl:text-3xl font-alegreya">Project title</h2>
				<p className="mt-6 text-xl xl:mt-12 xl:text-xl">
					I’m highly interested in these technologies and my objective is to keep growing and adquiring more
					knowledge. I’m highly interested in these technologies and my objective is to keep growing and
					adquiring more knowledge
				</p>
			</div>
		</section>
	);
};

export default Projects;
