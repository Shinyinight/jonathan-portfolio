import Image from "next/image";
import React, { useState } from "react";

interface ProjectProps {
    project: {
        image: string;
        title: string;
        content: string;
        link?: {
            text: string;
            link: string;
        };
    };
}

const Project = ({ project }: ProjectProps) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setHoverBackgroundPosition = (e) => {
        setX(e.nativeEvent.layerX - 350);
        setY(e.nativeEvent.layerY - 350);
    };

    return (
        <article className="flex group z-10 relative flex-col gap-4 xl:gap-28 xl:flex-row  work border-[1px] rounded border-neutral-700 bg-neutral-950 w-fit overflow-hidden">
            <div
                className="flex flex-col flex-1 gap-12 p-8 xl:p-12 xl:flex-row description"
                onMouseMove={(e) => setHoverBackgroundPosition(e)}
            >
                <div className="xl:h-full xl:w-[400px] w-full h-[200px] relative flex justify-center align-middle">
                    <Image
                        src={`${project.image}`}
                        alt="Project image"
                        fill={true}
                        className="object-cover"
                    />
                </div>

                <div className="w-full grow">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    {project.link && (
                        <div className="mt-4">
                            <a
                                href={project.link.link}
                                target="_blank"
                                className={`texl-xl underline underline-offset-2 text-blue-300 hover:text-blue-400`}
                            >
                                {project.link.text}
                            </a>
                        </div>
                    )}
                    <p className="mt-6 text-lg xl:text-xl">{project.content}</p>
                </div>

                <div
                    className="absolute top-0 left-0 transition-colors duration-300 rounded-full group-hover:bg-blue-600 w-[700px] h-[700px] blur-[200px] -z-10 opacity-10 bg-none"
                    style={{
                        transform: `translate(${x}px, ${y}px)`,
                    }}
                ></div>
            </div>
        </article>
    );
};

export default Project;
