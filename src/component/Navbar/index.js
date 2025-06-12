import React, { useState } from 'react'
import "./style.css"
import phone from "../../assets/phone_icon.png"
import mail from "../../assets/mail_icon.png"
import logo from "../../assets/logo.svg"
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'

const navItems = ["Home", "About", "Academics", "Events", "Placements", "Gallery", "Infrastructure", "Resources", "Blogs", "Contact"];

const Navbar = () => {
    const [page, setPage] = useState("Home")

    const navigate = useNavigate();


    function handlePage(item) {
        setPage(item)
        if (item === "Home") {
            navigate("/")
        }
        else {
            navigate(`/${item}`)
        }

    }


    return (
        <div className='navbar-container'>
            <header className="top-bar">
                <div className="contact-info">
                    <span><img src={phone} alt='icon' />1800-102-1044</span>
                    <span><img src={mail} alt='icon' />admission@aryacollege.org</span>
                </div>
            </header>

            <nav className="navbar">
                <div className="logo">
                    <img src={logo} />
                </div>
                <ul className="nav-links">
                    {navItems.map((item, idx) => (
                        <motion.li
                            key={idx}
                            className={item === page ? "active" : ""}
                            whileHover={{ scale: 1.05, color: "#e53935" }}
                            transition={{ type: "spring", stiffness: 400 }}
                            onClick={() => handlePage(item)}
                        >
                            {item}
                        </motion.li>
                    ))}

                </ul>
            </nav>
        </div>
    )
}

export default Navbar