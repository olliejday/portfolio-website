import cv_dark from "../../cv/cv_design_dark.pdf"
import cv_light from "../../cv/cv_design_light.pdf"
import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import GatsbyImage from "gatsby-image"

// Format for the about page
// Each item in array is a section on the about page
const about = [
  {
    image: <StaticQuery
      query={
        graphql`
          query {
              imageFront: file(relativePath: { eq: "images/portrait_pic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }   
            }
          `
      }
      render={data => (<GatsbyImage fluid={data.imageFront.childImageSharp.fluid} alt={"Close up of a man"}/>)}
    />,
    alt: "Close up of man",
    body: ["Oliver Day is a user experience designer and developer.", "Based in the UK."],
    colours: "bg-blue-100 text-blue-900"
  },
  {
    timeline: [{
      date: "2021",
      title: "Graduating with BSc. in Computer Science and Artificial Intelligence",
      subtitle: "University of Edinburgh"
    },
      { date: "2016", title: "Foundation Diploma in Art and Design", subtitle: "Arts University Bournemouth" }
    ],
    colours: "bg-red-100 text-red-900"
  }
  ,
  {
    subtitle: "Designing interactive experiences:",
    list: ["Artificial Intelligence", "Sustainability", "Humane tech."],
    colours: "bg-green-100 text-green-900"
  }
  ,
  {
    subtitle: "Let's do some good...",
    cv: [["CV (light)", cv_light], ["CV (dark)", cv_dark]],
    email: ["ollie@odd.ooo", "mailto:ollie@odd.ooo"],
    colours: "bg-pink-100 text-pink-900"
  }
]

// Format for the home page
export const preview = {...about[0], ...about[2]}

export default about
