import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
/* import "./App.css"; */
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Technologies />
            <AboutMe/>
        </>
    );
}

export default App;
