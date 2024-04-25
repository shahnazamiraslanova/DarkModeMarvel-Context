import React, { useContext } from 'react';
import './All.css'
import { DarkModeContext } from '../contexts/DarkModeContext';

const Footer = () => {
    const date=new Date();
    const {darkMode,toggleDarkMode}=useContext(DarkModeContext)
  return (
    <footer className={darkMode? "darkFooter" :""}>
        <p>Created by Shahnaz Amiraslanova {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer