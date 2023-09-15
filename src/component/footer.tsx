import React from "react";
import discord from '../assets/img/discord.png';
import twitter from '../assets/img/twitter.png';
import linkedin from '../assets/img/linkedin.png';
import medium from '../assets/img/medium.png';
import logo from "../assets/img/YourD-Logo-high.png";
import {FaSquareTwitter,FaLinkedin,FaDiscord,FaMedium} from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="w-full h-full relative">
      <div className="flex flex-col justify-center items-center bg-opacity-60 bg-white">
        <img src={logo} alt= "LOGO"className="w-32"/>
        <div className="flex text-2xl text-black mt-4">yourd@yourd.xyz</div>
        <div className="flex gap-4 mt-4">
         <FaSquareTwitter size={28} className="hover:text-yellow-500 transition relative"/>
         <FaLinkedin size={28} className="hover:text-yellow-500 transition relative"/>
         <FaDiscord size={28} className="hover:text-yellow-500 transition relative"/>
         <FaMedium size={28} className="hover:text-yellow-500 transition relative"/>
        </div>
        <div className="font-bold mt-4 mb-4">© 2023 YourD, Inc. All rights reserved.</div>
        
      </div>      
    </footer>
  );
};

export default Footer;
