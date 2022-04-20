import React, { useContext } from 'react'
import { ModeContext } from '../../Context/ModeContext'

export default function LoginForm() {

  const {darkMode, setDarkMode} = useContext(ModeContext)

  return (
    <div className={darkMode ? "login-container login-container-dark" : "login-container"}>
        <form action="index.html" className="login-form">
        <h1>Login</h1>

        <div className="txtb">
          <input type="text" placeholder="Username"/>
        </div>

        <div className="txtb">
          <input type="password" placeholder="Password"/>
        </div>

        <input type="submit" className="logbtn" value="Login"/>

        <div className="bottom-text">
          Don't have account? <a href="/register">Sign up</a>
        </div>
        
      </form>
    </div>
  )
}
