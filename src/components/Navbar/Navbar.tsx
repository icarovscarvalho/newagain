import React from "react"
import logoImg from "../../assets/images/mokey_logo.png";
import "./Navbar.css"

export function Navbar() {
    return (
        <header>
            <nav id="navbar">
                <div className="nav-brand">
                <div className="logomark">
                    <img src={logoImg} alt="Logomarca" />
                </div>
                <h1>Monkey Plans</h1>
                </div>

                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About us</a></li>
                </ul>
            </nav>
        </header>
    )
}