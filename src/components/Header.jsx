import React, { useContext, useEffect } from 'react';
import './All.css';
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        console.log(darkMode);
    }, [darkMode]); // Log darkMode whenever it changes

    const handleClick = () => {
        toggleDarkMode();
    };

    return (
        <header className={darkMode? "headerDark": ""}>
            <nav>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/024/553/676/small/skull-wearing-crown-logo-skull-king-sticker-pastel-cute-colors-generative-ai-png.png" alt="" />
                <ul>
                    <li><a href="https://www.marvel.com/404">Home</a></li>
                    <li><a href="https://www.marvel.com/404">About</a></li>
                    <li><a href="https://www.marvel.com/404">Gallery</a></li>
                    <li><a href="https://www.marvel.com/404">Contact us </a></li>
                    <li><button onClick={handleClick}><MdOutlineDarkMode /></button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
