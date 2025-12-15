import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../About";
import Project from "../Project";
import Skills from "../Skills";
import Contact from "../Contact";
import Education from "../Education";


const Main = () => {
    return (
        <>
            <Navbar />
            <About />
            <Project />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </>
    );
};

export default Main;