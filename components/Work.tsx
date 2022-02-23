import React from 'react';

interface WorkProps {
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

const Work = ({ image, title, children, tech, link }: WorkProps) => {
	return (
		<article className="flex flex-col min-w-full gap-4 px-12 mt-2 xl:gap-28 xl:flex-row xl:mt-24 work xl:px-40">
			<img
				className="flex-shrink-0 object-cover mt-10 xl:mt-0 md:max-h-[400px] 2xl:w-[600px] max-h-[900px] xl:w-[500px] xl:max-h-[500px] 2xl:max-h-[800px] ring-4 ring-zinc-900 rounded object-left-top"
				src={`images/${image}`}
				alt="project-image"
			/>
			<div className="flex-1 description">
				<h2 className="mt-6 text-3xl font-bold xl:mt-8 xl:text-4xl font-alegreya">{title}</h2>
				{link && (
					<div className="mt-4">
						<a
							href={link.link}
							target="_blank"
							className={`texl-xl xl:text-xl xl:underline xl:underline-offset-2 hover:${link.color}`}
						>
							{link.text}
						</a>
					</div>
				)}
				<p className="mt-6 text-xl xl:mt-12 xl:text-2xl 2xl:text-3xl">{children}</p>
				<div className="flex gap-10 mt-16">
					{tech.map((tech) => {
						return (
							<div
								className={`relative ${!tech.effect ? 'bg-white rounded-full ring-2 ring-white' : ''}`}
							>
								<img
									src={`/images/${tech.img}`}
									alt="logo"
									className="relative z-10 object-cover w-16 xl:w-24"
								/>
								{tech.effect && (
									<img
										src={`/images/${tech.img}`}
										alt="logo"
										className="absolute top-0 z-0 object-cover w-16 xl:w-24 blur"
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default Work;
