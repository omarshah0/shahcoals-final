import React, { useEffect } from "react"
import SEO from "../components/Seo/seo"
import Hero from "../components/Hero/Hero"
import Products from "../components/Products/Products"
import Ceo from "../components/CEO/Ceo"
import SingleProduct from "../components/SingleProduct/SingleProduct"
import gsap from "gsap"

const homeAnimation = () => {
  const tl = gsap.timeline()
  tl.from(".line__title", {
    delay: 1,
    duration: 0.7,
    y: 100,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  })
  tl.from(".subtitle h2", {
    duration: 0.7,
    y: 100,
    ease: "power4.out",
  })
  tl.from(".hero .cta-button", {
    y: 100,
    opacity: 0,
    duration: 0.2,
  })
}

const IndexPage = () => {
  useEffect(() => {
    homeAnimation()
  }, [])
  return (
    <>
      <SEO title="ShahCoals"></SEO>
      <Hero />
      <Products />
      <Ceo />
      <SingleProduct />
      <div className="container margin-top align-center"></div>
      <div className="container margin-top align-center"></div>
      <div className="container margin-top align-center"></div>
    </>
  )
}

export default IndexPage
