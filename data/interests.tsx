import { Interest } from "@/models/Interest";
import {
	Alien,
	CirclesThree,
	Cloud,
	Database,
	DeviceMobile,
	GlobeHemisphereEast,
} from "phosphor-react";

const interests: Interest[] = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Globe icon</title>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
				>
					<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
					<path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
				</g>
			</svg>
		),
		title: "Front/Web development",
		text: "My focus and passion since I discovered it. Creating things that can be useful to users is amazing!",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Dots icon</title>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M2.5 17a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
				/>
			</svg>
		),
		title: "Web design",
		text: "Besides creating and developing new projects, I really enjoy exploring new trends and platforms about design and UX/UI",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Database icon</title>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
				>
					<path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
					<path d="M4 6v6a8 3 0 0 0 16 0V6" />
					<path d="M4 12v6a8 3 0 0 0 16 0v-6" />
				</g>
			</svg>
		),
		title: "Back end",
		text: "Never missing a pillar of every front end application. I love connecting both app and server and see them work together!",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Phone icon</title>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm5-1h2m-1 13v.01"
				/>
			</svg>
		),
		title: "Mobile development",
		text: 'In a world on the way to be fully "mobile" this is a must. Responsiveness and native interfaces are more important than ever',
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Cloud icon</title>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151a4.857 4.857 0 0 0-4.44 5.241a4.856 4.856 0 0 0 5.236 4.444h10.751a3.771 3.771 0 0 0 3.99-3.54a3.772 3.772 0 0 0-3.538-3.992z"
				/>
			</svg>
		),
		title: "Cloud & Versioning",
		text: "Almost all my stuff is on the Cloud. Versioning and deploy pipelines are also on a huge trend and simplifies a lot of work",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
			>
				<title>Infinite icon</title>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M9.828 9.172a4 4 0 1 0 0 5.656A10 10 0 0 0 12 12a10 10 0 0 1 2.172-2.828a4 4 0 1 1 0 5.656A10 10 0 0 1 12 12a10 10 0 0 0-2.172-2.828"
				/>
			</svg>
		),
		title: "New stuff",
		text: "I really enjoy discovering new technologies and learning the differences between existing ones. Development is on constant evolution so am I!",
	},
];

export default interests;
