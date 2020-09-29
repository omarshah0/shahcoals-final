import React from "react"
import Image from "../ImageFluid/image" // requires a loader
import "./Hero.scss"

function Hero() {
  return (
    <div className="container full margin-top">
      <div className="hero">
        <div className="hero__image">
          <Image src="coal1" alt="ShahCoals" />
          <div className="image__overlay"></div>
        </div>
        <div className="hero__title">
          <div className="line">
            <h2 className="line__title">Shah</h2>
          </div>
          <div className="line">
            <h2 className="line__title">Coals</h2>
          </div>
          <div className="line subtitle">
            <h2>Sole Proprietor</h2>
          </div>
        </div>
        <div className="cta-button">
          <button>Contact Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
