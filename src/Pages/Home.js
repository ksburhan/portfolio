import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials"

const Home = () => {
    return (
        <main className="text-gray-900 bg-gray-100 body-font">
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Testimonials />
            <Contact />
        </main>
    );
}

export default Home;