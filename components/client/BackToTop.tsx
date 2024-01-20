"use client";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const BackToTop = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				document.documentElement.scrollTop -
					document.documentElement.clientHeight / 2 >
				0
			)
				setShow(true);
			else setShow(false);
		});

		return () => {
			window.addEventListener("scroll", () => {
				if (
					document.documentElement.scrollTop -
						document.documentElement.clientHeight / 2 >
					0
				)
					setShow(true);
				else setShow(false);
			});
		};
	});

	return (
		<CSSTransition
			in={show}
			appear={true}
			unmountOnExit
			classNames="rotate"
			timeout={1000}
		>
			<button
				type="button"
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
				className="fixed z-20 bottom-8 right-8"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 24 24"
				>
					<title>Arrow up</title>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1"
						d="M12 5v14m4-10l-4-4M8 9l4-4"
					/>
				</svg>
			</button>
		</CSSTransition>
	);
};

export default BackToTop;
