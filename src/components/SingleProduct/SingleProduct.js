import React, { useState, useEffect } from "react"
import Image from "../ImageFluid/image"
import HotItem from "../../assets/SVGs/HotItem.svg"
import gsap from "gsap"
import Arrow from "../../assets/SVGs/left.svg"
import "./SingleProduct.scss"

const initialData = [
  {
    title: "BK-6 (6-Footy)",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
    imgUrl: "Coal_Product_1",
    activePos: "postTop",
    active: "first",
  },
  {
    title: "BK-4 (4-Footy)",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
    imgUrl: "Coal_Product_1",
    activePos: "postCenter",
    active: "second",
  },
  {
    title: "BK-2 (2-Footy)",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo",
    imgUrl: "Coal_Product_1",
    activePos: "postBottom",
    active: "third",
  },
]

function SingleProduct() {
  const tl = gsap.timeline()
  const [data, setData] = useState(initialData[0])
  console.log("Active Data is ", data)
  useEffect(() => {
    tl.from(".single__card__info", {
      duration: 0.5,
      opacity: 0,
      ease: "linear",
      toggleClass: data.activePos,
    })
  }, [data])
  return (
    <div className="container margin-top">
      <div className="products" style={{ textAlign: "center" }}>
        <h2>This Week Offer</h2>
        <div className="divider">
          <div className="divider__inner"></div>
        </div>
        <p>
          We offer something different to local and foreign customers
          <br /> and ensure you enjoy top-class service every time.
        </p>
      </div>
      <div className="singleProduct">
        <div className="single__product__icons">
          <div className={`arrowSvg ${data.activePos}`}>
            <Arrow />
          </div>
          <div className="single__product__icon">
            <div
              className="single__product__icon__inner"
              onClick={() => setData(initialData[0])}
            >
              <h2>BK-6</h2>
              <div className="img__abs">
                <Image src="Coal_Product_1" />
              </div>
            </div>
          </div>
          <div className="single__product__icon">
            <div
              className="single__product__icon__inner"
              onClick={() => setData(initialData[1])}
            >
              <h2>BK-4</h2>
              <div className="img__abs">
                <Image src="Coal_Product_1" />
              </div>
            </div>
          </div>
          <div className="single__product__icon">
            <div
              className="single__product__icon__inner"
              onClick={() => setData(initialData[2])}
            >
              <h2>BK-2</h2>
              <div className="img__abs">
                <Image src="Coal_Product_1" />
              </div>
            </div>
          </div>
        </div>
        <div className="single__product__info__card">
          <div className="single__card__info">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className="cta-button">
              <button className="dark">Contact Now</button>
            </div>
          </div>
          <div className="single__card__image active">
            <Image src={data.imgUrl} alt="Dukki Coal Mines Sample" />
            <div className="card__sale right orange">
              <HotItem />
              <p style={{ fontSize: "16px" }}>HOT!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
