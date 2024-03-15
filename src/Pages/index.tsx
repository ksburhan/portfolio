import { FC, memo } from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar/Navbar";
import Projects from "../components/sections/Projects";
import Resume from "../components/sections/Resume/Resume";
import Testimonials from "../components/sections/Testimonials"
import { metadata } from "../data/data";
import Page from "../components/layout/Page";

const Home: FC = memo(() => {
    const { title, description } = metadata;
    return (
        <>
            <Page title={title} description={description}>
                <Navbar />
                <About />
                <Projects />
                <Resume />
                <Testimonials />
                <Contact />
                <Footer />
            </Page>
        </>
    );
})

export default Home;