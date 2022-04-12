import React, { Component } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
       <div><FaLinkedinIn size={50} /> <FaGithub size={50} /> <FaInstagram size={50} /></div>
       <div><h2>© 2022 Dimitri Lavrentev</h2></div>
      </div>
    )
  }
}

