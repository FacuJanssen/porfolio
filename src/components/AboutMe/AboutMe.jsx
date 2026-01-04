import React from "react";

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="about-me__title">About Me</h2>
            <div className="about-me__container">
                <div className="about-me__socials">
                    <div className="socials__git-hub">GitHub</div>
                    <div className="socials__mail">Mail</div>
                    <div className="socials__linkedin">LinkedIn</div>
                </div>
                <div className="about-me__bio">
                    <span className="bio__title">Bio</span>
                    <p className="bio__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure at odit ratione quod id consectetur impedit
                        beatae rerum! Voluptatum dolor commodi officiis corrupti
                        veritatis doloremque eum ipsam! Sint, voluptas natus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
