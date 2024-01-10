import {
	DribbbleLogo,
	Envelope,
	GithubLogo,
	InstagramLogo,
	LinkedinLogo,
	TwitterLogo,
} from "phosphor-react";

const contact_links = [
	{
		name: "Github",
		icon: <GithubLogo size={68} />,
		url: "https://github.com/jonathanfernandezfm",
		blank: true,
	},
	{
		name: "Instagram",
		icon: <InstagramLogo size={68} />,
		url: "https://www.instagram.com/jonathanfdez_poak/",
		blank: true,
	},
	{
		name: "LinkedIn",
		icon: <LinkedinLogo size={68} />,
		url: "https://www.linkedin.com/in/jonathanfernandezfm/",
		blank: true,
	},
	{
		name: "Twitter",
		icon: <TwitterLogo size={68} />,
		url: "https://twitter.com/JonathanFdezM",
		blank: true,
	},
	{
		name: "Dribble",
		icon: <DribbbleLogo size={68} />,
		url: "https://dribbble.com/JonathanFM",
		blank: true,
	},
	{
		name: "Email",
		icon: <Envelope size={68} />,
		url: "mailto:jonathanfernandezfm@gmail.com",
		blank: false,
	},
];

export default contact_links;
