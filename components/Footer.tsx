const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center px-12 py-20 text-center xl:justify-around xl:flex-row xl:p-20 bg-dark">
			<img src="images/logo.svg" alt="Jonathan dev logo" />
			<div>
				<p className="mt-6 xl:mt-0">
					Copyright © {new Date().getFullYear()} Jonathan Fernández Mertanen
				</p>
				<p className="mt-6 text-right xl:mt-2">
					<a
						href="https://github.com/jonathanfernandezfm/portfolio-v2"
						target="_blank"
						rel="noreferrer"
						className="underline"
					>
						This project - Github
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
