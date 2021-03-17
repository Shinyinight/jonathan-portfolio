import ScrollContainer from 'react-indiana-drag-scroll';

const SKILLS = [
	{ name: 'Angular', image: 'angular.png' },
	{ name: 'React', image: 'react.png' },
	{ name: 'React Native', image: 'react-native.png' },
	{ name: 'Typescript', image: 'typescript.png' },
	{ name: 'Javascript', image: 'javascript.png' },
	{ name: 'Node', image: 'node.png' },
	{ name: 'Gatsby', image: 'gatsby.png' },
	{ name: 'HTML', image: 'html.png' },
	{ name: 'CSS', image: 'css.png' },
	{ name: 'Java', image: 'java.png' },
	{ name: 'MongoDB', image: 'mongo.png' },
	{ name: 'C++', image: 'c++.png' },
	{ name: 'PHP', image: 'php.png' },
	{ name: 'WordPress', image: 'wordpress.png' },
	{ name: 'Git', image: 'git.png' },
	{ name: 'Google Cloud', image: 'google-cloud.png' },
	{ name: 'Databases', image: 'database.png' },
	{ name: 'Bash & Linux', image: 'bash.png' },
	{ name: 'Photoshop', image: 'photoshop.png' },
	// { name: 'AdobeXD', image: 'adobexd.png' },
];

interface SkillsProps {}

export default function Skills({}: SkillsProps) {
	return (
		<section id="my-skills" className="flex flex-col items-center py-16 text-center xl:py-40 my-skills bg-dark">
			<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">My skills</h1>
			<p className="px-8 mt-10 text-xl xl:text-3xl">
				I'm looking to improve my skills and learn new technologies / areas
			</p>
			<ScrollContainer vertical={false} className="w-5/6 xl:w-3/5 scroll-container">
				<div id="carrousel" className="flex gap-8 p-4 mt-16 xl:gap-16 carrousel">
					{SKILLS.map((skill) => {
						return (
							<div className="relative flex-shrink-0" key={skill.name} data-tip={skill.name}>
								<img src={skill.image} alt="logo" className="relative z-10 object-cover w-16 xl:w-24" />
								<img
									src={skill.image}
									alt="logo"
									className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
								/>
							</div>
						);
					})}
				</div>
			</ScrollContainer>
		</section>
	);
}
