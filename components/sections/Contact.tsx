import { MutableRefObject } from 'react';
import { Envelope } from 'phosphor-react';

import ContactForm from '@components/ContactForm';
import contact_links from '@data/contact';

interface ContactProps {
	contactRef: MutableRefObject<any>;
	contactFormRef: MutableRefObject<any>;
}

const Contact = ({ contactRef, contactFormRef }: ContactProps) => {
	return (
		<section ref={contactRef} className="flex flex-col justify-center py-16 text-center xl:py-40 contact">
			<h1 className="text-4xl font-bold xl:text-5xl font-alegreya">Contact</h1>
			<div className="flex flex-wrap justify-center gap-4 px-4 mt-16 xl:px-0 xl:gap-16 contact-links">
				{contact_links.map((link) => {
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
};

export default Contact;
