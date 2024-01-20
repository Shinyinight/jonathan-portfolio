import { Interest } from "@/models/Interest";
import { DM_Serif_Display } from "next/font/google";
import React, { ComponentProps, ReactPropTypes, useState } from "react";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const ArticleInterest = (
	props: ComponentProps<"div"> & { interest: Interest; index: number },
) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const setHoverBackgroundPosition = (e) => {
		setX(e.nativeEvent.layerX - 150);
		setY(e.nativeEvent.layerY - 150);
	};

	return (
		<article
			key={props.interest.title}
			className={`group w-full relative border-[1px] rounded shadow-lg hover:shadow-xl card border-neutral-700 bg-neutral-950 overflow-hidden ${props.className}`}
		>
			<div
				className="z-0 interest-bg"
				style={{
					backgroundImage: `url('/images/bg${props.index}.jpg')`,
				}}
			/>
			<div
				className="relative z-10 flex flex-col items-center justify-center h-full p-12 align-middle pointer-events-none"
				onMouseMove={(e) => setHoverBackgroundPosition(e)}
			>
				<div>{props.interest.icon}</div>
				<h2 className={`${dmSerifDisplay.className} mt-4 text-2xl font-bold`}>
					{props.interest.title}
				</h2>
				<p className="mt-6 text-xl">{props.interest.text}</p>
			</div>
		</article>
	);
};

export default ArticleInterest;
