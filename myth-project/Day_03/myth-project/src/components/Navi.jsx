import React from 'react'
import Logo from "../assets/img/logo.png"
import '../assets/styles/navi.scss'

const Navi = () => {
  return (
    <>
      <nav>
        <div className="brand">
          <img src={Logo} alt="brand" />
          <a href='#esb'>Throne of Gods</a>
        </div>
        <div className="usercard">
          <img src="https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_960_720.jpg" alt="profil" />
          <span>eSb1992</span>
          <button>Logout</button>
        </div>
      </nav>
    </>
    
  )
}
export default Navi