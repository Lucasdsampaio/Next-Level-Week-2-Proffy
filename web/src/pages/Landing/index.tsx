import React from "react";
import "./styles.css"
import logoImg from "../../assests/images/logo.svg";
import landingImg from "../../assests/images/landing.svg";

import studyIcon from "../../assests/images/icons/study.svg";
import giveClassesIcon from "../../assests/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assests/images/icons/purple-heart.svg";


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>Ensinar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="purple heart"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;
