import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar() {
    return <>
        <div class="header-container">
            <div class="logo">iFio :&#41;</div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <nav class="nav-bar">
                <ul class="nav-bar-list">
                    <li class="nav-bar-item">
                        <a class="nav-bar-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-bar-item">
                        <a class="nav-bar-link" href="#">Promociones</a>
                    </li>
                    <li class="nav-bar-item">
                        <a class="nav-bar-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-bar-item">
                        <a class="nav-bar-link" href="#">Soporte</a>
                    </li>
                </ul>
            </nav>
            <a class="nav-bar-link nav-bar-cart-widget-link" href="#"><CartWidget /></a>
        </div>
        <div class="solid-line"></div>
    </>
}

export default NavBar;