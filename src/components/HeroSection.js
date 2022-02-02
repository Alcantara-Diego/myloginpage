import React from "react";
import svg from "../assets/svg1.svg"



function HeroSection(){


    return(
        <main className="position-relative d-flex align-items-center">

            <div className="heroContent position-relative d-flex flex-column">
                <h1>Seja Bem Vindo! </h1>

                <p>Entre com sua conta ou crie uma agora para se manter em contato com a gente e aproveitar de todos nossos serviços!</p>

                <a href="/login" className="actionBtn">Começar</a>

                <div className="decorationCircle"></div>

            </div>


            <div className="ilustrationContainer d-flex align-items-center justify-content-center">
                <img className="ilustration" src={svg} alt="."></img>
            </div>

            
            <div className="decorationItem box box1"></div>
            <div className="decorationItem box box2"></div>

        </main>
    )
}

export default HeroSection;