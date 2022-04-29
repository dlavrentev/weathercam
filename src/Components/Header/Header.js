import React,{useContext, Fragment} from 'react'
import { ModeContext } from '../../Context/ModeContext'
import profilepicture from '../../assets/profile.jpg'
import Media from 'react-media';
import { FaBars } from "react-icons/fa";


export default function Header({user, toggleMode}) {
  
  const {darkMode, setDarkMode} = useContext(ModeContext)
  
  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {matches => (
        <Fragment>
          {matches.small && <div className={darkMode ? "header-container header-container-dark" : "header-container"}>
            <button className={darkMode ? "switch-btn switch-btn-dark" : "switch-btn"} onClick={toggleMode}>{darkMode ? "LIGHT" : "DARK"}</button>
            <div>
              <a className={darkMode ? "a-links a-links-dark" : "a-links"} href="/login"><FaBars size={50} /></a>
            </div>
            <div>
                <img className="profile-image" src={profilepicture} alt="" />
            </div>
            
        </div>}
          
          {matches.medium && <div className={darkMode ? "header-container header-container-dark" : "header-container"}>
            <button className={darkMode ? "switch-btn switch-btn-dark" : "switch-btn"} onClick={toggleMode}>{darkMode ? "LIGHT" : "DARK"}</button>
            <div>
              <a className={darkMode ? "a-links a-links-dark" : "a-links"} href="/login"><FaBars size={50}/></a>
            </div>
            <div>
                <img className="profile-image" src={profilepicture} alt="" />
            </div>
            
        </div>}
          
          {matches.large && <div className={darkMode ? "header-container header-container-dark" : "header-container"}>
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
            
        </div>}
        </Fragment>
      )}
    </Media>
  )
}


