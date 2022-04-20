import React,{useContext} from 'react'
import { ModeContext } from '../../Context/ModeContext'
import profilepicture from '../../assets/profile.jpg'

export default function Header({user, toggleMode}) {
  
  const {darkMode, setDarkMode} = useContext(ModeContext)
  
  return (
    <div className={darkMode ? "header-container header-container-dark" : "header-container"}>
        <button className={darkMode ? "switch-btn switch-btn-dark" : "switch-btn"} onClick={toggleMode}>{darkMode ? "LIGHT" : "DARK"}</button>
        <div className="nav-container">
            
            <a className={darkMode ? "a-links a-links-dark" : "a-links"} href="/">Find</a>
            <a className={darkMode ? "a-links a-links-dark" : "a-links"} href="/yourweather">Your weather</a>
        </div>
        <div>
          <a className={darkMode ? "a-links a-links-dark" : "a-links"} href="/login">Login/Sign up</a>
        </div>
        <div>
            <img className="profile-image" src={profilepicture} alt="" />
        </div>
        
    </div>
  )
}
