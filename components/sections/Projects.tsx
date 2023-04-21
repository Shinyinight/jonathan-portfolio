import { MutableRefObject } from "react";
import Project from "../Project";

import projects from "@/data/projects";

interface ProjectsProps {
    projectsRef: MutableRefObject<any>;
}

const Projects = ({ projectsRef }: ProjectsProps) => {
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
                    {projects.map((project) => {
                        return <Project project={project}></Project>;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
