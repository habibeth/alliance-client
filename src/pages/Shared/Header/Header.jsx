import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/akcl.png'
import "./Header.css"


const Header = () => {
    const menuItems = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <a>Login</a>
        </li>
    </>


    const [navSize, setNavSize] = useState("10rem");
    const [navColor, setNavColor] = useState("transparent");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#fff") : setNavColor("#fff");
        window.scrollY > 10 ? setNavSize("") : setNavSize("");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div className="bg-navbar" style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
            opacity: 1,
        }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center">
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    {menuItems}
                                </ul>
                            </div>
                            <Link href="/" className="btn btn-ghost text-xl">
                                <img src={logo} alt="logo" className="h-10" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {menuItems}
                            </ul>
                        </div>
                        {/* <div className="navbar-end">
                            <a className="btn">Button</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;