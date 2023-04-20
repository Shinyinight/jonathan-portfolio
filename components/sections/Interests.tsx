import interests from "@/data/interests";

const Interests = () => {
    return (
        <section
            id="interests"
            className="container py-16 m-auto text-center xl:py-40 interests"
        >
            <h1 className="text-4xl font-bold xl:text-5xl font-rubik">
                Interests
            </h1>
            <div className="flex flex-wrap justify-center gap-8 mt-16 xl:px-48 articles">
                {interests.map((interest) => {
                    return (
                        <article
                            key={interest.title}
                            className="flex flex-col items-center justify-center p-12 align-middle border-[1px] rounded shadow-lg hover:shadow-xl card border-neutral-700 bg-neutral-950"
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
