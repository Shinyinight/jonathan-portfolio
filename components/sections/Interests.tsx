import interests from "@/data/interests";

const Interests = () => {
    return (
        <section
            id="interests"
            className="py-16 text-center xl:py-40 interests"
        >
            <h1 className="text-4xl font-bold xl:text-5xl font-rubik">
                Interests
            </h1>
            <div className="flex flex-wrap justify-around px-6 mt-16 xl:px-48 gap-x-2 gap-y-12 articles">
                {interests.map((interest) => {
                    return (
                        <article
                            key={interest.title}
                            className="flex flex-col items-center p-12 rounded shadow-lg hover:shadow-xl card"
                        >
                            {interest.icon}
                            <h2 className="mt-4 text-2xl font-bold font-alegreya">
                                {interest.title}
                            </h2>
                            <p className="mt-6 text-lg">{interest.text}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Interests;
