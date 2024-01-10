import interests from "@/data/interests";
import ArticleInterest from "../ArticleInterest";

const Interests = () => {
	return (
		<section
			id="interests"
			className="container py-16 m-auto text-center xl:py-40 interests"
		>
			<h1 className="text-4xl font-bold xl:text-5xl font-rubik">Interests</h1>
			<div className="flex flex-wrap justify-center gap-8 px-6 mt-24 xl:px-48 articles">
				{interests.map((interest, index) => {
					return <ArticleInterest key={index} interest={interest} />;
				})}
			</div>
		</section>
	);
};

export default Interests;
