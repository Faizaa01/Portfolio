import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../About";
import Project from "../Project";
import Skills from "../Skills";
import Contact from "../Contact";


const Main = () => {
    return (
        <>
            <Navbar />
            <About />
            <Project />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default Main;