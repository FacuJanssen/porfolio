import React from "react";
import "./Content.css";
import Hero from "../Hero/Hero";
import Technologies from "../Technologies/Technologies";

const Content = () => {
    return (
        <div className="content">
            <Hero />
            <Technologies />
        </div>
    );
};

export default Content;
