import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import Menu from "../Menu/Menu"
import Image from "../ImageFluid/image"
import Phone from "../../assets/SVGs/phone.svg"
import Clock from "../../assets/SVGs/clock.svg"
import Mail from "../../assets/SVGs/mail.svg"
import Facebook from "../../assets/SVGs/facebook.svg"
import Twitter from "../../assets/SVGs/twitter.svg"
import Instagram from "../../assets/SVGs/instagram.svg"
import "./Header.scss"

function Header() {
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setMenu(false)
  }, [location])
  return (
    <header className="header">
      <Menu menu={menu} />
      <div className="header__secondary">
        <div className="header__secondary__left">
          <div className="hsl__svg">
            <Phone />
            <p>+92 335 123 0333</p>
          </div>
          <div className="hsl__svg">
            <Clock />
            <p>Mon - Sat 8:00 - 17:00</p>
          </div>
          <div className="hsl__svg">
            <Mail />
            <a href="mailto: info@shahcoals.com">info@shahcoals.com</a>
          </div>
        </div>
        <div className="header__secondary__right">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
      <div className="header__primary">
        <div className="header__nav header__nav__left">
          <Link to="/">HOME</Link>
          <div className="vl"></div>
          <Link to="#">PAGES</Link>
          <div className="vl"></div>
          <Link to="#">PRODUCTS</Link>
        </div>
        <div className="header__logo">
          <Link to="/">
            <Image src="logo" />
          </Link>
        </div>
        <div className="header__nav header__nav__right">
          <Link to="#">CONTACT</Link>
          <div className="vl"></div>
          <Link to="#">BLOG</Link>
          <div className="vl"></div>
          <Link to="#">WHATSAPP</Link>
        </div>
        <div className="nav" onClick={() => setMenu(!menu)}>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
