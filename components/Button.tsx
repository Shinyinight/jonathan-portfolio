const Button = ({ variant, children, ...props }) => {
	return (
		<button
			type="button"
			{...props}
			className={`px-10 py-2 text-xl ${
				variant === "primary"
					? "bg-neutral-200 text-neutral-950 hover:bg-neutral-300 border-neutral-950"
					: "hover:bg-neutral-900 bg-neutral-950 border-neutral-700"
			} font-extrabold tracking-wide border-[1px] rounded-xl md:px-12 md:py-3 xl:py-3 xl:text-2xl xl:px-14 focus:ring-2 focus:ring-neutral-800`}
		>
			{children}
		</button>
	);
};

export default Button;
