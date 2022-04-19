import React,{useContext} from 'react'
import { ModeContext } from '../../Context/ModeContext'

export default function Header({user, toggleMode}) {
  
  const {darkMode, setDarkMode} = useContext(ModeContext)
  
  return (
    <div className={darkMode ? "header-container header-container-dark" : "header-container"}>
        <button className="switch-btn" onClick={toggleMode}>{darkMode ? "LIGHT" : "DARK"}</button>
        <div className="nav-container">
            
            <a className="a-links" href="/">Find</a>
            <a className="a-links" href="/yourweather">Your weather</a>
        </div>
        <div>
          <a className="a-links" href="/login">Login/Sign up</a>
        </div>
        <div>
            <img className="profile-image" src={user.avatarUrl} alt="" />
        </div>
        
    </div>
  )
}
