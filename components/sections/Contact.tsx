import { MutableRefObject } from "react";
import { Envelope } from "phosphor-react";

import ContactForm from "@/components/ContactForm";
import contact_links from "@/data/contact";

interface ContactProps {
    contactRef: MutableRefObject<any>;
    contactFormRef: MutableRefObject<any>;
}

const Contact = ({ contactRef, contactFormRef }: ContactProps) => {
    return (
        <section
            ref={contactRef}
            className="container flex flex-col justify-center min-h-screen py-16 m-auto text-center xl:pb-40 contact w-fit"
        >
            <h1 className="text-4xl font-bold xl:text-5xl font-rubik">
                Contact
            </h1>
            <div className="flex flex-wrap justify-center gap-4 px-4 mt-16 xl:px-0 xl:gap-16 contact-links">
                {contact_links.map((link) => {
                    return (
                        <a
                            key={link.name}
                            data-tooltip-id="tooltip"
                            data-tooltip-content={link.name}
                            href={link.url}
                            target={link.blank ? "_blank" : ""}
                            className="p-2 border-[1px] rounded border-neutral-700 hover:bg-neutral-900 bg-neutral-950 focus:outline-none focus:ring-4 focus:ring-neutral-800 focus:border-transparent"
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
