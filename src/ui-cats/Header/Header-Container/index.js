import React from "react";
import "./index.css";
import logoFondo from "./LOGO-1024x1024.webp"

function ContainerTitulo(){
    return (
        <div className="portada">
            <div className="contenido-portada">

                <img src={logoFondo}></img>
                <h1 className="titulo-portada">CATS FAMILY</h1>

            </div>
            
            <a href="../../Section-Quienes-Somos" className="link-quienes-somos">
                <i className="fa-solid fa-angles-down"></i>
            </a>
        </div>
    )
}

export { ContainerTitulo };