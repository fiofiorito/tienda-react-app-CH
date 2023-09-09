import { useState } from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar() {
    // change className --> toggle navbar
    const [hamburgerLine, setHamburgerLine] = useState("line unclicked");
    const [navBar, setNavBar] = useState("nav-bar hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked) {
            setHamburgerLine("line clicked");
            setNavBar("nav-bar visible");
            console.log(hamburgerLine, navBar);
        } else {
            setHamburgerLine("line unclicked");
            setNavBar("nav-bar hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }



    return <>
        <div className="header-container">
            <div className="logo">iFit Gym</div>
            <div className="hamburger" onClick={updateMenu}>
                <div className={hamburgerLine}></div>
                <div className={hamburgerLine}></div>
                <div className={hamburgerLine}></div>
            </div>
            <nav className={navBar}>
                <ul className="nav-bar-list">
                    <li className="nav-bar-item">
                        <a className="nav-bar-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-bar-item">
                        <a className="nav-bar-link" href="#">Promociones</a>
                    </li>
                    <li className="nav-bar-item">
                        <a className="nav-bar-link" href="#">Servicios</a>
                    </li>
                    <li className="nav-bar-item">
                        <a className="nav-bar-link" href="#">Soporte</a>
                    </li>
                </ul>
            </nav>
            <a className="nav-bar-link nav-bar-cart-widget-link" href="#"><CartWidget /></a>
        </div>
        <div className="solid-line"></div>
    </>
}

export default NavBar;