import React,{useContext} from 'react'
import { ModeContext } from '../../Context/ModeContext'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Footer() {

  const {darkMode, setDarkMode} = useContext(ModeContext)


  return (
    <div className={darkMode ? "footer-container footer-container-dark" : "footer-container"}>
       <div><FaLinkedinIn size={50} /> <FaGithub size={50} /> <FaInstagram size={50} /></div>
       <div><h2>© 2022 Dimitri Lavrentev</h2></div>
      </div>
  )
}
