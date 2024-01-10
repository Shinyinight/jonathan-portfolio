import React, { useState } from "react";

const ArticleInterest = ({ interest }) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const setHoverBackgroundPosition = (e) => {
		setX(e.nativeEvent.layerX - 150);
		setY(e.nativeEvent.layerY - 150);
	};

	return (
		<article
			key={interest.title}
			className="group z-10 relative border-[1px] rounded shadow-lg hover:shadow-xl card border-neutral-700 bg-neutral-950 overflow-hidden"
		>
			<div
				className="flex flex-col items-center justify-center h-full p-12 align-middle"
				onMouseMove={(e) => setHoverBackgroundPosition(e)}
			>
				<div>{interest.icon}</div>
				<h2 className="mt-4 text-2xl font-bold ">{interest.title}</h2>
				<p className="mt-6 text-lg ">{interest.text}</p>
				<div
					className="absolute top-0 left-0 transition-colors duration-300 rounded-full group-hover:bg-red-600 w-[300px] h-[300px] blur-3xl -z-10 opacity-10 bg-none"
					style={{
						transform: `translate(${x}px, ${y}px)`,
					}}
				/>
			</div>
		</article>
	);
};

export default ArticleInterest;
