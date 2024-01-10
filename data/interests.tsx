import {
	Alien,
	CirclesThree,
	Cloud,
	Database,
	DeviceMobile,
	GlobeHemisphereEast,
} from "phosphor-react";

const interests = [
	{
		icon: <GlobeHemisphereEast size={56} />,
		title: "Front/Web development",
		text: "My focus and passion since I discovered it. Creating things that can be useful to users is amazing!",
	},
	{
		icon: <CirclesThree size={56} />,
		title: "Web design",
		text: "Besides creating and developing new projects, I really enjoy exploring new trends and platforms about design and UX/UI",
	},
	{
		icon: <Database size={56} />,
		title: "Back end",
		text: "Never missing a pillar of every front end application. I love connecting both app and server and see them work together!",
	},
	{
		icon: <DeviceMobile size={56} />,
		title: "Mobile development",
		text: 'In a world on the way to be fully "mobile" this is a must. Responsiveness and native interfaces are more important than ever',
	},
	{
		icon: <Cloud size={56} />,
		title: "Cloud & Versioning",
		text: "Almost all my stuff is on the Cloud. Versioning and deploy pipelines are also on a huge trend and simplifies a lot of work",
	},
	{
		icon: <Alien size={56} />,
		title: "New stuff",
		text: "I really enjoy discovering new technologies and learning the differences between existing ones. Development is on constant evolution so am I!",
	},
];

export default interests;
