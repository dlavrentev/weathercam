import React from 'react'

export default function LoginForm() {
  return (
    <div className="login-container">
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
