import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";

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
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Bebas+Neue&family=Rubik:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Main>
                <ReactTooltip delayShow={300} effect={"solid"} />
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
