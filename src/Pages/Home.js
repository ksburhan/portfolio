import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials"

const Home = () => {
    return (
        <main className="text-gray-900 bg-gray-100 body-font">
            <Navbar/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </main>
    );
}

export default Home;