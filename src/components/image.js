import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import AddUserSvg from "../assets/images/undraw_Add_user_re_5oib.svg"
import DataTrendSvg from "../assets/images/undraw_Data_trends_re_2cdy.svg"
import InternetSvg from "../assets/images/undraw_Internet_on_the_go_re_vben.svg"
import CreditSvg from "../assets/images/undraw_Credit_card_re_blml.svg"
import MobileSvg from "../assets/images/undraw_Mobile_feed_re_72ta.svg"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//
//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture not found</div>
//   }
//
//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

function ImageAddUser({width, className}) {
  return <img className={className} src={AddUserSvg} width={width} alt="add user"/>
}

function ImageDataTrend({width, className}) {
  return <img className={className} src={DataTrendSvg} width={width} alt="data trend"/>
}

function ImageInternet({width, className}) {
  return <img className={className} src={InternetSvg} width={width} alt="internet"/>
}

function ImageCredit({width, className}) {
  return <img className={className} src={CreditSvg} width={width} alt="credit card"/>
}

function ImageMobile({width, className}) {
  return <img className={className} src={MobileSvg} width={width} alt="mobile feed"/>
}

export { ImageAddUser, ImageCredit, ImageDataTrend, ImageInternet, ImageMobile }
