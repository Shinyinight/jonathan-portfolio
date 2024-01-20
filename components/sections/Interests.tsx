import interests from "@/data/interests";
import { DM_Serif_Display } from "next/font/google";
import ArticleInterest from "@/components/ArticleInterest";
import { Fade } from "@/lib/animations";

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Interests = () => {
	return (
		<section
			id="interests"
			className="container py-16 m-auto text-center xl:py-40 interests"
		>
			<Fade triggerOnce>
				<div className="flex justify-center">
					<div className="relative z-10 title-brush">
						<h1
							className={`${dmSerifDisplay.className} text-5xl font-bold xl:text-5xl`}
						>
							Interests
						</h1>
					</div>
				</div>
			</Fade>
			<div className="grid grid-cols-1 gap-6 mx-6 mt-24 md:grid-cols-2 xl:px-48 articles md:px-0">
				{interests.map((interest, i) => (
					<Fade
						triggerOnce
						delay={i * 150}
						className={`row-span-1
              ${i === 3 || i === 6 ? "col-span-1 md:col-span-2" : ""}
              ${i === 1 ? "md:row-span-2" : ""}
            `}
					>
						<ArticleInterest
							key={interest.title}
							interest={interest}
							index={i}
							className="h-full"
						/>
					</Fade>
				))}
			</div>
		</section>
	);
};

export default Interests;
