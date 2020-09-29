import React, { useEffect } from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import "./Menu.scss"

function Menu({ menu }) {
  useEffect(() => {
    const tl = gsap.timeline()
    if (menu) {
      tl.to(".menu", {
        duration: 1,
        height: "50vh",
        ease: "expo.inOut",
      })
    } else {
      tl.to(".menu", {
        duration: 1,
        height: "0",
        ease: "expo.inOut",
      })
    }
  }, [menu])

  return (
    <div className="menu">
      <div className="menu__nav">
        <span>Menu</span>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <hr />
      <div className="menu__contact">
        <span>Get in Touch With Us</span>
        <a href="mailto: sohail226@gmail.com">Email</a>
        <span>+92 333 648 3355</span>
        <span>Get a Free Quote</span>
      </div>
      <h1>
        ShahCoals <span>Pvt</span> <span>Ltd</span>
      </h1>
    </div>
  )
}

export default Menu
