import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";

function App() {
    return (
        <div className="content">
            <NavBar />
            <Hero />
            <Technologies />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default App;
