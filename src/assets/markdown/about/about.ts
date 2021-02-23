import cv_dark from "../../cv/cv_design_dark.pdf"
import cv_light from "../../cv/cv_design_light.pdf"
import portrait_pic from "../../images/portrait_pic.png"

// Format for the home page
export const preview = {}

// Format for the about page
// Each item in array is a section on the about page
export default [
  {
    title: "About",
    image: portrait_pic,
    alt: "Close up of man",
    body: ["Oliver Day is a user experience designer and developer.", "Based in the UK."],
    colour: "blue"
  },
  {
    timeline: [{
      date: "2021",
      title: "Graduating with BSc. in Computer Science and Artificial Intelligence",
      subtitle: "University of Edinburgh"
    },
      { date:"2016", title:"Foundation Diploma in Art and Design", subtitle:"Arts University Bournemouth" }
    ],
    colour: "red"
  },
  {
    subtitle: "Designing interactive experiences",
    list: ["Artificial Intelligence", "Sustainability", "Humane tech."],
    colour: "green"
  },
  {
    title: "Let's do some good...",
    cv: [["CV (light)", cv_light], ["CV (dark)", cv_dark]],
    email: ["olliejdaystorage1@gmail.com", "mailto:olliejdaystorage1@gmail.com"],
    colour: "pink"
  }
]