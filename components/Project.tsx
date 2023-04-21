import Image from "next/image";
import React, { useState } from "react";

interface ProjectProps {
    image: string;
    title: string;
    children: React.ReactNode;
    link?: {
        text: string;
        link: string;
        color: string;
    };
    tech: {
        img: string;
        effect: boolean;
    }[];
}

const Project = ({ image, title, children, tech, link }: ProjectProps) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setHoverBackgroundPosition = (e) => {
        setX(e.nativeEvent.layerX - 350);
        setY(e.nativeEvent.layerY - 350);
    };

    return (
        <article className="flex group z-10 relative flex-col gap-4 xl:gap-28 xl:flex-row  work border-[1px] rounded border-neutral-700 bg-neutral-950 w-fit overflow-hidden">
            <div
                className="flex flex-1 gap-12 p-12 description"
                onMouseMove={(e) => setHoverBackgroundPosition(e)}
            >
                <div className="h-full w-[400px] relative">
                    <Image
                        src={`/images${image}`}
                        alt="Project image"
                        fill={true}
                        className="object-cover"
                    />
                </div>

                <div className="w-full grow">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    {link && (
                        <div className="mt-4">
                            <a
                                href={link.link}
                                target="_blank"
                                className={`texl-xl xl:text-xl xl:underline xl:underline-offset-2 hover:${link.color} text-blue-300`}
                            >
                                {link.text}
                            </a>
                        </div>
                    )}
                    <p className="mt-6 text-xl xl:mt-12 ">{children}</p>
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
