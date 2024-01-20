import Footer from "@/components/Footer";
import Main from "@/components/Main";
import BackToTop from "@/components/client/BackToTop";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Interests from "@/components/sections/Interests";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
	return (
		<Main>
			<Home />
			<Skills />
			<Interests />
			<Projects />
			<Contact />
			<BackToTop />
			<Footer />
		</Main>
	);
}
