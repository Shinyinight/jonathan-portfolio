import Project from "../client/Project";

import projects from "@/data/projects";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative min-h-screen py-16 xl:py-40 projects bg-dark"
		>
			<div className="container m-auto">
				<div className="flex justify-center">
					<div className="relative z-10 title-brush">
						<h1
							className={`${dmSerifDisplay.className} text-5xl font-bold text-center xl:text-5xl`}
						>
							Projects / Work
						</h1>
					</div>
				</div>
				<div className="flex flex-col gap-6 mx-6 mt-24 xl:mx-40">
					{projects.map((project, index) => {
						return <Project key={project.title} project={project} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
