import Head from 'next/head';
import ReactTooltip from 'react-tooltip';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect, useRef, useState } from 'react';
import {
	GlobeHemisphereEast,
	CirclesThree,
	Database,
	DeviceMobile,
	Cloud,
	Infinity,
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	TwitterLogo,
	DribbbleLogo,
	Envelope,
} from 'phosphor-react';
import emailjs from 'emailjs-com';

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

const CONTACT_LINKS = [
	{
		name: 'Github',
		icon: <GithubLogo size={68} />,
		url: 'https://github.com/jonathanfernandezfm',
	},
	{
		name: 'Instagram',
		icon: <InstagramLogo size={68} />,
		url: 'https://www.instagram.com/jonathanfdez_poak/',
	},
	{
		name: 'LinkedIn',
		icon: <LinkedinLogo size={68} />,
		url: 'https://www.linkedin.com/in/jonathanfernandezfm/',
	},
	{
		name: 'Twitter',
		icon: <TwitterLogo size={68} />,
		url: 'https://twitter.com/JonathanFdezM',
	},
	{
		name: 'Dribble',
		icon: <DribbbleLogo size={68} />,
		url: 'https://dribbble.com/JonathanFM',
	},
];

export default function Home() {
	const [loaded, setLoaded] = useState(false);
	const contactRef = useRef(null);
	const contactFormRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		setLoaded(true);
	}, []);

	const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_xdx644q', 'template_9b28zgq', e.target, 'user_HuEZVyrJjGHRjfcrrhQ7r').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	}

	return (
		<div className="portfolio">
			<Head>
				<title>&gt;jfm | Jonathan Fernández Mertanen</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main>
				{loaded && <ReactTooltip delayShow={300} effect={'solid'} />}
				<section
					id="home"
					className="flex flex-col-reverse items-center justify-end px-12 bg-no-repeat xl:h-screen pt-28 mt-22 xl:flex-row xl:pl-44 main-hero"
				>
					<div className="xl:flex-1 xl:mr-40 left-column">
						<img src="logo.svg" alt="logo" className="absolute w-16 top-10 left-8 xl:w-auto xl:left-16" />
						<h1 className="mt-8 text-4xl text-center xl:mt-0 xl:text-left font-alegreya xl:text-8xl">
							Hi, I'm <b>Jonathan</b>
						</h1>
						<p className="px-12 mt-6 text-xl leading-snug text-center xl:text-left xl:px-0 text-1xl xl:text-4xl">
							I'm an Information Systems Engineer, Full Stack Developer and web enthusiast from Granada,
							Spain.
						</p>
						<div className="flex gap-8 my-14 xl:my-0 xl:mt-12 buttons">
							<button
								onClick={() => {
									scrollTo(projectsRef);
								}}
								className="px-10 py-2 text-xl font-bold tracking-wide rounded shadow-xl xl:py-3 xl:text-xl xl:px-14 gradient-1 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
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
					<div className="xl:flex-1 right-column">
						<img src="hero-image.png" alt="hero-image" />
					</div>
				</section>
				<section
					id="my-skills"
					className="flex flex-col items-center py-16 text-center xl:py-40 my-skills bg-dark"
				>
					<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">My skills</h1>
					<p className="px-8 mt-10 text-xl xl:text-3xl">
						I'm looking to improve my skills and learn new technologies / areas
					</p>
					<ScrollContainer vertical={false} className="w-5/6 xl:w-3/5 scroll-container">
						<div id="carrousel" className="flex gap-8 p-4 mt-16 xl:gap-16 carrousel">
							{SKILLS.map((skill) => {
								return (
									<div className="relative flex-shrink-0" key={skill.name} data-tip={skill.name}>
										<img
											src={skill.image}
											alt="logo"
											className="relative z-10 object-cover w-16 xl:w-24"
										/>
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
				<section
					id="projects"
					ref={projectsRef}
					className="flex flex-col-reverse px-12 py-16 xl:flex-row xl:py-40 xl:px-40 projects bg-dark"
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
							I’m highly interested in these technologies and my objective is to keep growing and
							adquiring more knowledge. I’m highly interested in these technologies and my objective is to
							keep growing and adquiring more knowledge
						</p>
					</div>
				</section>
				<section id="contact" ref={contactRef} className="py-16 text-center xl:py-40 contact">
					<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">Contact</h1>
					<div className="flex flex-wrap justify-center gap-4 px-4 mt-16 xl:px-0 xl:gap-16 contact-links">
						{CONTACT_LINKS.map((link) => {
							return (
								<a
									key={link.name}
									data-tip={link.name}
									href={link.url}
									target="_blank"
									className="p-2 rounded link-contact focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
								>
									{link.icon}
								</a>
							);
						})}
						<button
							onClick={() => {
								contactFormRef.current.focus();
							}}
							data-tip={'Email'}
							className="p-2 rounded link-contact focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
						>
							<Envelope size={68} />
						</button>
					</div>
					<form className="flex flex-col items-center gap-6 mt-24 contact-form" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<div className="flex flex-col items-start w-5/6 gap-4 xl:items-center xl:flex-row xl:w-2/6 row">
							<label className="w-12 text-xl text-left xl:w-24">Name</label>
							<input
								ref={contactFormRef}
								placeholder="Name"
								className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
								type="text"
								name="user_name"
							/>
						</div>
						<div className="flex flex-col items-start w-5/6 gap-4 xl:items-center xl:flex-row xl:w-2/6 row">
							<label className="w-12 text-xl text-left xl:w-24">Email</label>
							<input
								placeholder="Email"
								className="w-full px-4 py-2 rounded bg-dark focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
								type="email"
								name="user_email"
							/>
						</div>
						<div className="flex flex-col items-start w-5/6 gap-4 xl:items-center xl:flex-row xl:w-2/6 row">
							<label className="w-12 text-xl text-left xl:w-24">Message</label>
							<textarea
								placeholder="Hi! I want to talk to you"
								className="w-full h-40 px-4 py-2 rounded resize-none bg-dark focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
								name="message"
							/>
						</div>
						<div className="flex justify-end w-5/6 gap-4 xl:w-2/6 submit row">
							<input
								className="px-4 py-2 text-xl rounded cursor-pointer bg-dark font-alegreya focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
								type="submit"
								value="Send"
							/>
						</div>
					</form>
				</section>
			</main>

			<footer className="flex flex-col items-center justify-center px-12 py-20 text-center xl:justify-around xl:flex-row xl:p-20 bg-dark">
				<img src="logo.svg" alt="logo" />
				<p className="mt-6 xl:mt-0">Copyright 2021 Jonathan Fernández Mertanen</p>
			</footer>
		</div>
	);
}
