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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
