import React from "react";
import "./Content.css";
import Hero from "../Hero/Hero";
import Technologies from "../Technologies/Technologies";
import AboutMe from "../AboutMe/AboutMe";

const Content = () => {
    return (
        <div className="content">
            <Hero />
            <Technologies />
            <AboutMe />
        </div>
    );
};

export default Content;
