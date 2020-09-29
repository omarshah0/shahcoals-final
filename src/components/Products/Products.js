import React from "react"
import Card from "./Card/Card"
import "./Products.scss"

function Products() {
  return (
    <div className="container margin-top align-center">
      <div className="products">
        <h2>OUR LATEST COAL SAMPLES</h2>
        <div className="divider">
          <div className="divider__inner"></div>
        </div>
        <p>
          Check out some of our best selling Coal Products in all over Pakistan.
        </p>
      </div>
      <div className="container full card__container">
        <Card
          title="BK-6 (6-footy)"
          description="Description of 6-Footy Coal"
          card_key={1}
          hot_Item="Hot"
          place="Dukki"
        />
        <Card
          title="BK-4 (4-footy)"
          description="Description of 4-Footy Coal"
          card_key={2}
          hot_Item="Hot"
          place="Chamalong"
        />
        <Card
          title="BK-2 (2-footy)"
          description="Description of 2-Footy Coal"
          card_key={3}
          hot_Item="Sale"
          place="Hyderabad"
        />
      </div>
      <div className="cta-button margin">
        <button className="dark">Contact Now</button>
      </div>
    </div>
  )
}

export default Products
