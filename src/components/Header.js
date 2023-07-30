import React from "react";
import logo from "../images/logo192.png"

export default function Header(){
    return(
        <header className="header">
            <nav className="nav">
                <div className="nav-logo-para">
                    <img src={logo} alt='React'></img>                 
                    <p>ReactFacts</p>
                </div>
                <div className="nav-para-2">
                <p>React Course - Project 1</p>
                </div>
            </nav>
        </header>
    )
}