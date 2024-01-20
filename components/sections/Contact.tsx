import ContactForm from "@/components/ContactForm";
import contact_links from "@/data/contact";
import { DM_Serif_Display } from "next/font/google";
import { RefObject } from "react";

interface ContactProps {
	contactRef: RefObject<HTMLInputElement>;
	contactFormRef: RefObject<HTMLInputElement>;
}

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Contact = ({ contactRef, contactFormRef }: ContactProps) => {
	return (
		<section
			ref={contactRef}
			className="container flex flex-col justify-center min-h-screen py-16 m-auto text-center xl:pb-40 w-fit"
		>
			<div className="flex justify-center">
				<div className="relative z-10 title-brush">
					<h1
						className={`${dmSerifDisplay.className} text-5xl font-bold text-center xl:text-5xl`}
					>
						Contact
					</h1>
				</div>
			</div>{" "}
			<div className="flex flex-wrap justify-center gap-4 px-4 mt-24 xl:px-0 xl:gap-10">
				{contact_links.map((link) => {
					return (
						<a
							key={link.name}
							data-tooltip-id="tooltip"
							data-tooltip-content={link.name}
							href={link.url}
							target={link.blank ? "_blank" : ""}
						>
							{link.icon}
						</a>
					);
				})}
			</div>
			<ContactForm contactFormRef={contactFormRef} />
		</section>
	);
};

export default Contact;
