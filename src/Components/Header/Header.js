import React from 'react'

export default function Header({user}) {
  return (
    <div className="header-container">
        <div className="nav-container">
            <a className="a-links" href="/">Find</a>
            <a className="a-links" href="/random">Random</a>
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
