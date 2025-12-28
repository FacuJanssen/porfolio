import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Technologies />
        </>
    );
}

export default App;
