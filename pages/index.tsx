import { url } from 'inspector';
import Head from 'next/head';

export default function Home() {
	return (
		<div className="portfolio">
			<Head>
				<title>&gt;jfm | Jonathan Fernández Mertanen</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main>
				<section
					className="main-hero h-screen flex items-center"
					style={{ backgroundImage: 'url("background.png")' }}
				>
					<div className="left-column ml-48">
						<img src="logo.svg" alt="logo" className="absolute top-10 left-16" />
						<h1 className="font-alegreya text-8xl">
							Hi, I'm <b>Jonathan</b>
						</h1>
						<p className={'text-4xl'}>
							I'm an Information Systems Engineer, Full Stack Developer and web
							enthusiast from Granada, Spain.
						</p>
						<div className="buttons">
							<button>Projects</button>
							<button>Contact</button>
						</div>
					</div>
					<div className="right-column mr-20">
						<img src="hero-image.png" alt="hero-image" />
					</div>
				</section>
				<section className="my-skills"></section>
				<section className="interests"></section>
				<section className="projects"></section>
				<section className="contact"></section>
			</main>

			<footer></footer>
		</div>
	);
}
