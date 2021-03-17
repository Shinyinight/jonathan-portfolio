import { MutableRefObject } from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, DribbbleLogo, Envelope } from 'phosphor-react';
import ContactForm from '../components/ContactForm';

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

interface ContactProps {
	contactRef: MutableRefObject<any>;
	contactFormRef: MutableRefObject<any>;
}

export default function Contact({ contactRef, contactFormRef }: ContactProps) {
	return (
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
			<ContactForm contactFormRef={contactFormRef} />
		</section>
	);
}
