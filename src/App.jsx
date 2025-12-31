import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";

function App() {
    return (
        <>
            <NavBar />
            <Content className="content" />
        </>
    );
}

export default App;
