import * as React from "react"

import Carousel from "react-grid-carousel"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const carouselStyle = require("./styles/mdxImageCarousel.module.css")


  export default function MdxImageCarousel({ children, caption }) {
  const nCols = 2
  return (
    <div className={carouselStyle.container}>
      <Carousel cols={nCols} rows={1} gap={10} loop hideArrow={children.length <= nCols}>
        {children.map((c, i) =>
          <Carousel.Item key={"carousel-i"}>
            <Zoom zoomMargin={48}
                  overlayBgColorStart={"rgba(0, 0, 0, 0)"}
                  overlayBgColorEnd={"rgba(0, 0, 0, 0.75)"}>
              <img src={c} width={"100%"} alt={caption} />
            </Zoom>
          </Carousel.Item>
        )}
      </Carousel>
      <p className="gatsby-resp-image-figcaption">{caption}</p>
    </div>
  )
}