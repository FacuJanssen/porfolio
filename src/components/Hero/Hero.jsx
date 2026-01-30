import React from "react";
import "./Hero.css";
import ICONS from "../../Constant/Icons";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__title">Facundo Janssen</h1>
                <h2 className="hero__subtitle">
                    Desarrollador Full Stack orientado a 
                    JavaScript
                </h2>
                <p className="hero__description">Eficiencia y funcionalidad</p>
            </div>
            <img src="/hero.png" alt="FJ" className="hero__img" />
        </div>
    );
};

export default Hero;
