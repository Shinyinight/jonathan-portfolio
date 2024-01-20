"use client";

interface ButtonProps {
	variant?: "primary" | "secondary";
	idToScroll?: string;
	children: React.ReactNode;
	type?: "submit" | "reset" | "button" | undefined;
}

const Button = (props: ButtonProps & ButtonProps) => {
	const scrollTo = (id: string | undefined) => {
		if (!id) return;
		document
			.getElementById(id)
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<button
			onClick={() => scrollTo(props.idToScroll)}
			type={props.type}
			className={`px-10 py-2 text-xl ${
				props.variant === "primary"
					? "bg-neutral-200 text-neutral-950 hover:bg-neutral-300 border-neutral-950"
					: "hover:bg-neutral-900 bg-neutral-950 border-neutral-700"
			} font-extrabold tracking-wide border-[1px] rounded-xl md:px-12 md:py-3 xl:py-3 xl:text-2xl xl:px-14 focus:ring-2 focus:ring-neutral-800`}
		>
			{props.children}
		</button>
	);
};

export default Button;
