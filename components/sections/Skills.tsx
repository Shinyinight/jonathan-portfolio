import ScrollContainer from 'react-indiana-drag-scroll';

import skills from '@data/skills';

const Skills = () => {
	return (
		<section id="my-skills" className="flex flex-col items-center py-16 text-center xl:py-40 my-skills bg-dark">
			<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">My skills</h1>
			<p className="px-8 mt-10 text-xl xl:text-3xl">
				I'm looking to improve my skills and learn new technologies / areas
			</p>
			<ScrollContainer vertical={false} className="relative w-5/6 xl:w-3/5 scroll-container">
				<ul id="carrousel" className="flex gap-8 p-4 mt-16 xl:gap-16 carrousel hover:cursor-grab">
					{skills.map((skill) => {
						return (
							<li className="relative flex-shrink-0" key={skill.name} data-tip={skill.name}>
								<img src={skill.image} alt="logo" className="relative z-10 object-cover w-16 xl:w-24" />
								<img
									src={skill.image}
									alt="logo"
									className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
								/>
							</li>
						);
					})}
				</ul>
			</ScrollContainer>
		</section>
	);
};

export default Skills;
