import { FaFacebook, FaInstagram, FaPaperPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLaptop, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-blue-800 mt-20 py-10">
            <div className="grid md:grid-cols-3 max-w-6xl mx-auto justify-center">
                <div className="text-white">
                    <h2 className="text-xl font-normal">Quick Links</h2>
                    <div className="grid md:grid-cols-2">
                        <div className="">
                            <ul>
                                <li className="my-2">
                                    <Link to="#" className="underline">Alliance At Glance</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Clients</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Sewing</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Knitting</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Dyeing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="my-2">
                                    <Link to="#" className="underline">Fabric R&D</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Design Hub</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Sustainability</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Media</Link>
                                </li>
                                <li className="my-2">
                                    <Link to="#" className="underline">Career</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl font-normal text-center text-white">Follow US</h2>
                    <div className="flex justify-center my-5">
                        <ul className="flex text-2xl">
                            <li className="mr-2 p-3 rounded-full bg-white">
                                <FaFacebook />
                            </li>
                            <li className="mr-2 p-3 rounded-full bg-white">
                                <FaYoutube />
                            </li>
                            <li className="mr-2 p-3 rounded-full bg-white">
                                <FaTwitter />
                            </li>
                            <li className="mr-2 p-3 rounded-full bg-white">
                                <FaInstagram />
                            </li>
                            <li className="p-3 rounded-full bg-white">
                                <FaLinkedin />
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <input type="text" className="input rounded-r-none" placeholder="Your Email Address" />
                        <button className="bg-blue-500 px-5 py-4 rounded-r-md text-white">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
                <div className="text-white flex flex-col md:items-end mt-10 md:mt-0">
                    <h2 className="text-xl font-normal mb-5">Contact</h2>
                    <p className="mb-1">Phone : +880 09609 000600</p>
                    <p className="mb-1">+880 09639 000600</p>
                    <p className="mb-1">Email: info@akclbd.com</p>
                    <p className="mb-1">08/118, Pukurpar, Zirabo, Ashulia, Savar</p>
                </div>
            </div>
            <hr className="mt-5 mb-3" />
            <div className="text-white flex items-center flex-col md:flex-row md:justify-between max-w-6xl mx-auto">
                <div className="">
                    <p>Copyright © 2024 Alliance GROUP || All Rights Reserved.</p>
                </div>
                <div className="">
                    <p className="flex items-center">
                        <FaLaptop />
                        <span className="ml-2">Developed By Ahsan Habib</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;