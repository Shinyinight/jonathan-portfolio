"use client";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Interests from "@/components/sections/Interests";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Page() {
	const contactRef = useRef<HTMLInputElement>(null);
	const contactFormRef = useRef<HTMLInputElement>(null);
	const projectsRef = useRef<HTMLInputElement>(null);

	return (
		<Main>
			<ReactTooltip id="tooltip" delayShow={300} variant="light" />
			<Home projectsRef={projectsRef} contactRef={contactRef} />
			<Skills />
			<Interests />
			<Projects projectsRef={projectsRef} />
			<Contact contactRef={contactRef} contactFormRef={contactFormRef} />
			<BackToTop />
			<Footer />
		</Main>
	);
}
