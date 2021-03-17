import { GlobeHemisphereEast, CirclesThree, Database, DeviceMobile, Cloud, Infinity } from 'phosphor-react';

const INTERESTS = [
	{
		icon: <GlobeHemisphereEast size={56} />,
		title: 'Front/Web development',
		text: 'My focus and passion since I discovered it. Creating things that can be useful for others is amazing!',
	},
	{
		icon: <CirclesThree size={56} />,
		title: 'Web design',
		text:
			'Besides creating and developing new programming projects, I really enjoy exploring new trends and platforms about design and UX/UI',
	},
	{
		icon: <Database size={56} />,
		title: 'Back end',
		text:
			'Never missing a pillar for every front end system. I love connecting both front and end and see them work together!',
	},
	{
		icon: <DeviceMobile size={56} />,
		title: 'Mobile development',
		text:
			'In a world in the way to be fully "mobile" this is a must and responsiveness and native interfaces are more important than ever',
	},
	{
		icon: <Cloud size={56} />,
		title: 'Cloud & Versioning',
		text:
			'Almost all my stuff is on the Cloud. Versioning and deploy pipelines are also on a huge trend and simplifies a lot of work',
	},
	{
		icon: <Infinity size={56} />,
		title: 'New stuff',
		text:
			'I really enjoy discovering new technologies and learning the differences between existing ones. Development is on constant evolution so am I!',
	},
];

interface InterestsProps {}

export default function Interests({}: InterestsProps) {
	return (
		<section id="interests" className="py-16 text-center xl:py-40 interests">
			<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">Interests</h1>
			<div className="flex flex-wrap justify-around px-6 mt-16 xl:px-48 gap-x-2 gap-y-12 articles">
				{INTERESTS.map((interest) => {
					return (
						<article
							key={interest.title}
							className="flex flex-col items-center p-12 rounded shadow-lg hover:shadow-xl card"
						>
							{interest.icon}
							<h2 className="mt-4 text-xl font-alegreya">{interest.title}</h2>
							<p className="mt-6 text-lg">{interest.text}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
