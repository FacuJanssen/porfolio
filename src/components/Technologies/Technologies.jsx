import React from "react";
import "./Technologies.css";
import ICONS from "../../Constant/Icons";

const Technologies = () => {
    return (
        <div className="technologies">
            <h2 className="technologies-title">Technologies</h2>
            <ul className="technologies-container">
                {/* HTML - CSS - JavaScript React Git & GitHub Vercel NodeJS
                    Lenguajes JavaScript TypeScript Express MongoDB Postman
                    Mongoose, Bcrypt, JsonWebToken, Dotenv, NodeMailer, Nodemon */}
                <li className="list-item">
                    <ICONS.html className="icon-html" />
                    <span className="list-item__span">HTML</span>
                </li>
                <li className="list-item">
                    <ICONS.css className="icon-css" />
                    <span className="list-item__span">CSS</span>
                </li>
                <li className="list-item">
                    <ICONS.js className="icon-js" />
                    <span className="list-item__span">JavaScript</span>
                </li>
                <li className="list-item">
                    <ICONS.node className="icon-node" />
                    <span className="list-item__span">NodeJS</span>
                </li>
                <li className="list-item">
                    <ICONS.react className="icon-react" />
                    <span className="list-item__span">React</span>
                </li>
                <li className="list-item">
                    <ICONS.express className="icon-express" />
                    <span className="list-item__span">Express</span>
                </li>
                <li className="list-item">
                    <ICONS.mongo className="icon-mongo" />
                    <span className="list-item__span">MongoDB</span>
                </li>
                <li className="list-item">
                    <ICONS.ts className="icon-ts" />
                    <span className="list-item__span">TypeScript</span>
                </li>
                <li className="list-item">
                    <ICONS.git className="icon-git" />
                    <span className="list-item__span">Git</span>
                </li>
                <li className="list-item">
                    <ICONS.github className="icon-github" />
                    <span className="list-item__span">GitHub</span>
                </li>
                <li className="list-item">
                    <ICONS.postman className="icon-postman" />
                    <span className="list-item__span">Postman</span>
                </li>
                <li className="list-item">
                    <ICONS.vercel className="icon-vercel" />
                    <span className="list-item__span">Vercel</span>
                </li>
            </ul>
        </div>
    );
};

export default Technologies;
