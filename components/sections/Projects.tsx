import Work from "@/components/Work";
import useWindowDimensions from "hooks/useWindowDimensions";
import { MutableRefObject, useRef, useState } from "react";
import Project from "../Project";

interface ProjectsProps {
    projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
    const ref = useRef(null);
    const [scroll, setScroll] = useState(0);
    const { height, width } = useWindowDimensions();

    return (
        <section
            ref={projectsRef}
            className="relative min-h-screen py-16 xl:py-40 projects bg-dark"
        >
            <div className="container m-auto">
                <h1 className="text-4xl font-bold text-center xl:text-5xl font-rubik">
                    Projects
                </h1>
                <div className="flex flex-col gap-6 mx-40 mt-24">
                    <Project
                        image="/work1.png"
                        title="Plenion - Fullstack"
                        tech={[
                            { img: "angular.png", effect: true },
                            { img: "java.png", effect: true },
                            { img: "google-cloud.png", effect: true },
                        ]}
                    >
                        3 years working on The Cloud Gate S.L in Granada
                        developing a SaaS (Plenion 24/7) for Plenion, a Belgium
                        organization that provides ERP facilities for the
                        construction environment. This SaaS provides an API
                        (developed in Java and Google Cloud) to integrate Cloud
                        functionalities from Microsoft and Google into Plenion
                        systems, mainly files, calendar and tasks. In addition,
                        we provide a web application as a portal for customers
                        to access this information. This web application is
                        developed in Angular.
                    </Project>
                    <Project
                        image="/work2_2.png"
                        title="Bedroom Radio - Fullstack"
                        link={{
                            text: "Bedroom Radio",
                            link: "https://bedroomradio.es",
                            color: "text-blue-400",
                        }}
                        tech={[
                            { img: "react.png", effect: true },
                            { img: "nextjs.png", effect: false },
                        ]}
                    >
                        Bedroom Radio is a project focused on bringing and
                        discovering hispanic artists to people. The objective is
                        to give voice and a safe space to emergent artists that
                        have not much visibility. The application is built in
                        Next.js and it plays a music playlist fetched from our
                        own server. The backend is developed in Strapi CMS. It
                        is used to add songs and playlists and many other
                        functionalities that are shown in the application.
                    </Project>

                    <Project
                        image="/work3_1.png"
                        title="GTAV Private server - Fullstack"
                        link={{
                            text: "DespistaosRP",
                            link: "https://despistaos.es",
                            color: "text-blue-400",
                        }}
                        tech={[
                            { img: "node.png", effect: true },
                            { img: "react.png", effect: true },
                        ]}
                    >
                        One of the biggest spanish communities of Grand Theft
                        Auto Roleplay. I was part of this group of developers
                        and designers that developed a private roleplay server
                        for GTA V. The server was built in NodeJS and it used a
                        Chromium embedded instance to show the interface,
                        developed in React Component oriented. We worked with
                        designers that would create the interfaces ingame before
                        making them into code.
                    </Project>

                    <Project
                        image="/work4_1.png"
                        title="This Portfolio - Fullstack"
                        link={{
                            text: "Github",
                            link: "https://github.com/jonathanfernandezfm/portfolio-v2",
                            color: "text-red-600",
                        }}
                        tech={[
                            { img: "react.png", effect: true },
                            { img: "nextjs.png", effect: false },
                        ]}
                    >
                        I built this porfolio to show my work, what I know and a
                        bit of information about me. It is developed in Next.js.
                        It uses the Next API server to send an email form aswell
                        as other funcitonalities outside of this page.
                    </Project>
                </div>
            </div>
            {/* {width < 700 && (
                <h2 className="flex items-center justify-center gap-2 pt-4">
                    <svg
                        className="rotate-180"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    Scroll{" "}
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </h2>
            )}
            <div className="relative w-screen overflow-hidden">
                <div
                    className="flex gap-10 pb-4 overflow-x-scroll scrollbar-hide"
                    ref={ref}
                >
                    <Work
                        image="work1.png"
                        title="Plenion - Fullstack"
                        tech={[
                            { img: "angular.png", effect: true },
                            { img: "java.png", effect: true },
                            { img: "google-cloud.png", effect: true },
                        ]}
                    >
                        3 years working on The Cloud Gate S.L in Granada
                        developing a SaaS (Plenion 24/7) for Plenion, a Belgium
                        organization that provides ERP facilities for the
                        construction environment. This SaaS provides an API
                        (developed in Java and Google Cloud) to integrate Cloud
                        functionalities from Microsoft and Google into Plenion
                        systems, mainly files, calendar and tasks. In addition,
                        we provide a web application as a portal for customers
                        to access this information. This web application is
                        developed in Angular.
                    </Work>
                    <Work
                        image="work2_2.png"
                        title="Bedroom Radio - Fullstack"
                        link={{
                            text: "Bedroom Radio",
                            link: "https://bedroomradio.es",
                            color: "text-blue-400",
                        }}
                        tech={[
                            { img: "react.png", effect: true },
                            { img: "nextjs.png", effect: false },
                        ]}
                    >
                        Bedroom Radio is a project focused on bringing and
                        discovering hispanic artists to people. The objective is
                        to give voice and a safe space to emergent artists that
                        have not much visibility. The application is built in
                        Next.js and it plays a music playlist fetched from our
                        own server. The backend is developed in Strapi CMS. It
                        is used to add songs and playlists and many other
                        functionalities that are shown in the application.
                    </Work>

                    <Work
                        image="work3_1.png"
                        title="GTAV Private server - Fullstack"
                        link={{
                            text: "DespistaosRP",
                            link: "https://despistaos.es",
                            color: "text-blue-400",
                        }}
                        tech={[
                            { img: "node.png", effect: true },
                            { img: "react.png", effect: true },
                        ]}
                    >
                        One of the biggest spanish communities of Grand Theft
                        Auto Roleplay. I was part of this group of developers
                        and designers that developed a private roleplay server
                        for GTA V. The server was built in NodeJS and it used a
                        Chromium embedded instance to show the interface,
                        developed in React Component oriented. We worked with
                        designers that would create the interfaces ingame before
                        making them into code.
                    </Work>

                    <Work
                        image="work4_1.png"
                        title="This Portfolio - Fullstack"
                        link={{
                            text: "Github",
                            link: "https://github.com/jonathanfernandezfm/portfolio-v2",
                            color: "text-red-600",
                        }}
                        tech={[
                            { img: "react.png", effect: true },
                            { img: "nextjs.png", effect: false },
                        ]}
                    >
                        I built this porfolio to show my work, what I know and a
                        bit of information about me. It is developed in Next.js.
                        It uses the Next API server to send an email form aswell
                        as other funcitonalities outside of this page.
                    </Work>
                </div>
            </div>
            {scroll > 0 && width > 700 && (
                <div
                    className="absolute rotate-180 rounded-full left-10 top-1/2 hover:cursor-pointer hover:bg-zinc-900"
                    onClick={() => {
                        ref.current.scrollTo({
                            top: 0,
                            left:
                                width * (scroll - 1) +
                                (scroll - 1 > 0 ? 50 : -50),
                            behavior: "smooth",
                        });
                        if (scroll !== 0) setScroll(scroll - 1);
                    }}
                >
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="white"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            )}
            {scroll < 3 && width > 700 && (
                <div
                    className="absolute rounded-full right-10 top-1/2 hover:cursor-pointer hover:bg-zinc-900"
                    onClick={() => {
                        ref.current.scrollTo({
                            top: 0,
                            left: width * (scroll + 1) + 25 * scroll,
                            behavior: "smooth",
                        });
                        if (scroll !== 4) setScroll(scroll + 1);
                    }}
                >
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="white"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            )} */}
        </section>
    );
};

export default Projects;
