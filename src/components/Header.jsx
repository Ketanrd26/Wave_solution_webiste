import "../style/Header.scss";
import logo from "../assets/wave1.png"

const Header = () => {
    return (
        <>
        <div className="header_parent parent">
            <div className="header_cont cont">
                <img className="header_logo" src={logo} alt="Wave Solution"/>

                <div className="navlinks">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">services</a>
                    <a href="">Our Work</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <button className="btn">Book a call</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;