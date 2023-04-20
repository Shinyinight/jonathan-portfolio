import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Home from "@/components/sections/Home";
import Skills from "@/components/sections/Skills";
import Interests from "@/components/sections/Interests";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BackToTop";
import Main from "@/components/layout/Main";

const Index = () => {
    const contactRef = useRef(null);
    const contactFormRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <div>
            <Head>
                <title>&gt;jfm | Jonathan Fernández Mertanen</title>
            </Head>
            <Main>
                <ReactTooltip id="tooltip" delayShow={300} variant="light" />
                <Home projectsRef={projectsRef} contactRef={contactRef} />
                <Skills />
                <Interests />
                <Projects projectsRef={projectsRef} />
                <Contact
                    contactRef={contactRef}
                    contactFormRef={contactFormRef}
                />
                <BackToTop />
            </Main>

            <Footer />
        </div>
    );
};

export default Index;
