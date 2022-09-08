import React from "react";
import logo from '../img/logo.png';
import './Header.css';

const Header = (props) => {


    return (
        <header className="p-3 header-bg text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/">
                        <img src={logo} width="97" height="52" />
                    </a>

                    <h3 className="ms-2 header-title">Emergência</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;