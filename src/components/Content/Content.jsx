import React from "react";
import "./Content.css";
import Hero from "../Hero/Hero";
import Technologies from "../Technologies/Technologies";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <Hero />
            <Technologies />
            <AboutMe />
            <Footer />
        </div>
    );
};

export default Content;
