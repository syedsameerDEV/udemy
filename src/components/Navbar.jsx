import React from 'react'
import logo from "../assets/images/logo.svg"
const Navbar = () => {
    let color = {
        color: "#000000"
    }
    let size = {
        width: "100px",
    }
  return (
    <div className="navbar">
    <div className="navbar__s1">
      <img src={logo} alt="" style={size}/>
    </div>
    <div className="navbar__s2">
      <i className="fa-solid fa-magnifying-glass" style={{color}}></i>
      <input type="text" placeholder="Search for anything" />
    </div>
    <div className="navbar__s3">
      <p>Courses</p>
      <div className="mylearning">
        <p>My Learnings</p>
        <div className="mylearning__popup">
          <p>You did not purchase anything yet</p>
        </div>
      </div>
      <i className="fa-solid fa-cart-shopping" style={{color}}></i>
      <i className="fa-solid fa-bell" style={{color}}></i>
      <i className="fa-solid fa-user" style={{color}}></i>
    </div>
    <div className="navbar__s4">
      <i className="fa-solid fa-bars" style={{color}}></i>
    </div>
  </div>
  )
}

export default Navbar