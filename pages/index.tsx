import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Home from '@sections/Home';
import Skills from '@sections/Skills';
import Interests from '@sections/Interests';
import Projects from '@sections/Projects';
import Contact from '@sections/Contact';
import Footer from '@components/layout/Footer';
import Loader from '@components/layout/Loader';
import BackToTop from '@components/BackToTop';
import Main from '@components/layout/Main';

const Index = () => {
	const [loading, setLoading] = useState(true);
	const contactRef = useRef(null);
	const contactFormRef = useRef(null);
	const projectsRef = useRef(null);

	useEffect(() => {
		if (loading) document.body.style.overflow = 'hidden';

		setTimeout(() => {
			setLoading(false);
			document.body.style.overflow = 'auto';
		}, 4000);
	}, []);

	return (
		<div>
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
			<Loader loading={loading} />

			<Main>
				{!loading && <ReactTooltip delayShow={300} effect={'solid'} />}
				<Home projectsRef={projectsRef} contactRef={contactRef} />
				<Skills />
				<Interests />
				<Projects projectsRef={projectsRef} />
				<Contact contactRef={contactRef} contactFormRef={contactFormRef} />
				<BackToTop />
			</Main>

			<Footer />
		</div>
	);
};

export default Index;
