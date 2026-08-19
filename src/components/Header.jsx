import "../style/Header.scss";
import logo from "../assets/wave2.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="header_parent parent">
            <div className="header_cont cont">
                <img className="header_logo" src={logo} alt="Wave Solution"/>

                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/">Our Work</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Contact</Link>
                    <button className="btn">Book a call</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;