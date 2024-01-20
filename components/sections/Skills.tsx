import skills from "@/data/skills";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Skills = () => {
	return (
		<section
			id="my-skills"
			className="flex flex-col items-center py-16 text-center xl:py-40 bg-neutral-950 bg-dark"
		>
			<div className="container m-auto">
				<div className="flex justify-center">
					<div className="relative z-10 title-brush">
						<h1
							className={`${dmSerifDisplay.className} text-5xl font-bold xl:text-5xl`}
						>
							My skills
						</h1>
					</div>
				</div>
				<p className="px-8 mt-16 text-xl xl:text-3xl">
					Looking to improve my skills and learn new techs
				</p>
				<div className="relative w-full m-auto overflow-hidden xl:w-3/5">
					<ul className="flex gap-8 p-4 mt-16 xl:gap-16 carrousel-1 hover:cursor-grab">
						{skills.slice(0, 8).map((skill) => {
							return (
								<li
									className="relative flex-shrink-0 group"
									key={skill.name}
									data-tooltip-id="tooltip"
									data-tooltip-content={skill.name}
								>
									<img
										src={`/images/${skill.image}`}
										alt={`${skill.name} logo`}
										className="relative z-10 object-cover w-16 xl:w-20"
									/>
									<img
										src={`/images/${skill.image}`}
										alt={`${skill.name} logo blurred`}
										className="absolute top-0 z-0 object-cover w-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100 xl:w-20 blur"
									/>
								</li>
							);
						})}
					</ul>
					<ul className="flex gap-8 p-4 mt-16 xl:gap-16 carrousel-2 hover:cursor-grab">
						{skills.slice(8, skills.length).map((skill) => {
							return (
								<li
									className="relative flex-shrink-0 group"
									key={skill.name}
									data-tooltip-id="tooltip"
									data-tooltip-content={skill.name}
								>
									<img
										src={`/images/${skill.image}`}
										alt={`${skill.name} logo`}
										className="relative z-10 object-cover w-16 xl:w-24"
									/>
									<img
										src={`/images/${skill.image}`}
										alt={`${skill.name} logo blurred`}
										className="absolute top-0 z-0 object-cover w-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100 xl:w-24 blur"
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
