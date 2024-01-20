import ContactForm from "@/components/client/ContactForm";
import contact_links from "@/data/contact";
import { DM_Serif_Display } from "next/font/google";
import { Fade } from "@/lib/animations";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Contact = () => {
	return (
		<section
			id="contact"
			className="container flex flex-col justify-center min-h-screen py-16 m-auto text-center xl:pb-40"
		>
			<div className="flex justify-center">
				<div className="relative z-10 title-brush">
					<Fade triggerOnce>
						<h1
							className={`${dmSerifDisplay.className} text-5xl font-bold text-center xl:text-5xl`}
						>
							Contact
						</h1>
					</Fade>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-4 px-10 mt-24 xl:px-0 xl:gap-10">
				<Fade triggerOnce cascade damping={0.1}>
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
				</Fade>
			</div>
			<Fade triggerOnce>
				<ContactForm />
			</Fade>
		</section>
	);
};

export default Contact;
