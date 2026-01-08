import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__title">Facundo Janssen</h1>
                <span className="hero__subtitle">Full Stack Developer</span>
                <p className="hero__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
};

export default Hero;
