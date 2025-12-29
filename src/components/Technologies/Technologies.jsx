import React from "react";
import "./Technologies.css";

const Technologies = () => {
    return (
        <div className="technologies">
            <h2 className="technologies-title">Technologies</h2>
            <div className="technologies-container">
                <div className="frontend">
                    <h3 className="frontend__title">Frontend</h3>
                    <div className="frontend__container">
                        <div className="frontend__languages">
                            <h3 className="frontend__languages-title">
                                Lenguajes
                            </h3>
                            <div className="frontend__languages-list">
                                <p className="frontend__languages-list-item">
                                    HTML - CSS - JavaScript
                                </p>
                            </div>
                        </div>
                        <div className="frontend__framework">
                            <h3 className="frontend__framework-title">
                                Framework
                            </h3>
                            <div className="frontend__framework-list">
                                <span className="frontend__framework-list-item">
                                    React
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="backend">
                    <h3 className="backend__title">Backend</h3>
                    <div className="backend__container">
                        <div className="backend__languages">
                            <h3 className="backend__languages-title">
                                Lenguajes
                            </h3>
                            <p className="backend__languages-item">
                                JavaScript TypeScript
                            </p>
                        </div>
                        <div className="backend__framework">
                            <h3 className="backend__framework-title">
                                Framework
                            </h3>
                            <span className="backend__framework-item">
                                Express
                            </span>
                        </div>
                        <div className="backend__database">
                            <h3 className="backend__database-title">
                                Base de Datos
                            </h3>
                            <span className="backend__database-item">
                                MongoDB
                            </span>
                        </div>
                        <div className="backend__testing">
                            <h3 className="backend__testing-title">Testing</h3>
                            <span className="backend__testing-item">
                                Postman
                            </span>
                        </div>
                        <div className="backend__libraries">
                            <h3 className="backend__libraries-title">
                                Librerias
                            </h3>
                            <div className="backend__libraries-list">
                                <p className="backend__libraries-item">
                                    Mongoose, Bcrypt, JsonWebToken, Dotenv,
                                    NodeMailer, Nodemon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tools">
                    <div className="runtime">
                        <h3 className="runtime__title">Runtime</h3>
                        <span className="runtime__item">NodeJS</span>
                    </div>
                    <div className="deployment">
                        <h3 className="deployment__title">Despliegue</h3>
                        <span className="deployment__item">Vercel</span>
                    </div>
                    <div className="version-control">
                        <h3 className="version-control__title">
                            Version Control
                        </h3>
                        <p className="version-control__item">Git & GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
