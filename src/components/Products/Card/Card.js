import React from "react"
import gsap from "gsap"
import Image from "../../ImageFluid/image"
import HotItem from "../../../assets/SVGs/HotItem.svg"
import "./Card.scss"

function Card({ card_key, hot_Item, place }) {
  function animateCardIn(card_key) {
    gsap.to(`.card__image${card_key}`, {
      opacity: 0.8,
    })
    gsap.to(`.card__info${card_key}`, {
      height: "60%",
      duration: 0.3,
      ease: "power4.out",
    })
  }
  function animateCardOut() {
    gsap.to(".card__image", {
      opacity: 1,
    })
    gsap.to(".card__info", {
      height: 0,
      duration: 0.3,
      ease: "power4.out",
    })
  }
  return (
    <div
      className="card"
      onMouseEnter={() => animateCardIn(card_key)}
      onMouseLeave={animateCardOut}
    >
      <div className={`card__image card__image${card_key}`}>
        <Image src="Coal_Product_1" alt="Dukki Coal Mines Sample" />
        {hot_Item && (
          <div className="card__sale left">
            <HotItem />
            <p>{hot_Item}</p>
          </div>
        )}
        {place && (
          <div className="card__sale right black">
            <HotItem />
            <p>
              {place}
              <br />
              Sample
            </p>
          </div>
        )}
      </div>

      <div className={`card__info card__info${card_key}`}>
        <h2>BK-6 (6-footy)</h2>
        <p>Info About Coals</p>
      </div>
    </div>
  )
}

export default Card
