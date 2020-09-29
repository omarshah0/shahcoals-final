import React from "react"
import Image from "../ImageFluid/image"
import "./Ceo.scss"

function Ceo() {
  return (
    <div className="container full">
      <div className="CEO">
        <div className="ceo__background__image">
          <Image src="CEO_Bkg" />
        </div>
        <div className="container">
          <div className="ceo__info">
            <div className="ceo__display__picture">
              <Image src="ceo_saab" />
            </div>
            <div className="ceo__message">
              <p>
                The <strong>SHAHCOALS PVT.LTD</strong> has been delivering
                quality products while building a solid business foundation
                amidst a challenging operating environment. Our mission is to
                extend this trajectory into the future and turn the{" "}
                <strong>SHAHCOALS</strong> into a leading global company.
              </p>
              <hr />
              <p>Sohail Murtaza</p>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ceo
