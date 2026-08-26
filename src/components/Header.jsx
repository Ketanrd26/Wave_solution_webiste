import "../style/Header.scss";
import logo from "../assets/wave2.png"
import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="header_parent parent">
                <div className="header_cont cont">
                    <Link to="/" className="header_logo_link" onClick={closeMenu}>
                        <img className="header_logo" src={logo} alt="Wave Solution" />
                    </Link>

                    <div className={`navlinks ${menuOpen ? "active" : ""}`}>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                        <Link to="/services" onClick={closeMenu}>Services</Link>
                        <Link to="/ourwork" onClick={closeMenu}>Our Work</Link>
                        <Link to="/blog" onClick={closeMenu}>Blog</Link>
                        <Link to="/contact" onClick={closeMenu}>Contact</Link>
                        <Link to="/contact" className="btn" onClick={closeMenu}>Book a call</Link>
                    </div>


                    <button
                        className="menu_btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <RxCross1 /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;