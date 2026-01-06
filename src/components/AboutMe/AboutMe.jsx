import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="about-me__title">About Me</h2>
            <div className="about-me__container">
                <div className="about-me__socials">
                    <div className="socials__git-hub">
                        <div className="git-hub__header">
                            <span className="git-hub__header__title">
                                GitHub
                            </span>
                        </div>
                        <div className="git-hub__content">
                            <div className="git-hub__content__commit">
                                last commmit
                            </div>
                            <div className="git-hub__content__languages">
                                lenguajes
                            </div>
                        </div>
                    </div>
                    <div className="socials__bottom">
                        <div className="socials__mail">Mail</div>
                        <div className="socials__linkedin">LinkedIn</div>
                    </div>
                </div>
                <div className="about-me__bio">
                    <span className="bio__title">Bio</span>
                    <p className="bio__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque natus nesciunt id animi est provident voluptates
                        esse praesentium optio, illo porro quod error voluptate
                        consequuntur magnam vel doloremque corporis nemo? Sed
                        voluptatum tempora vero saepe accusamus quia assumenda
                        ut eius ratione in neque quis aliquid omnis repellendus,
                        ipsam sint autem error et at. Similique rem itaque
                        provident, earum illo obcaecati. Quod enim ratione
                        distinctio, et corporis placeat voluptates aspernatur
                        harum eum, ipsum eius dolore ea. Ratione eaque minima
                        ullam beatae consequuntur cupiditate ea placeat!
                        Doloremque voluptatem nobis excepturi quod quos?
                        Corporis et, odit beatae aliquid ut ea repellat enim
                        ducimus adipisci amet voluptatem qui aliquam vel libero
                        necessitatibus culpa ullam inventore sequi illum quia.
                        Fugiat eos soluta vitae totam aperiam?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
