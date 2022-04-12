import React from 'react'

export default function RegisterForm() {
  return (
    <div className="login-container">
        <form action="index.html" className="login-form">
        <h1>Sign Up</h1>

        <div className="txtb">
          <input type="text" placeholder="Username"/>
        </div>

        <div className="txtb">
          <input type="password" placeholder="Password"/>
        </div>

        <input type="submit" className="logbtn" value="Sign up"/>

        <div className="bottom-text">
          Already have an account? <a href="/login">Login</a>
        </div>
        
      </form>
    </div>
  )
}
