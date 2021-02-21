import * as React from "react"
import { ButtonArrow } from "./buttons"
import { AngleGradient } from "./angleGradients"
import GatsbyImage from "gatsby-image"

const portraitPic = require("../assets/images/portrait_pic2.png")

interface HeroTextTypes {
  title: string,
  about: string,
  isTop: boolean
}

interface HeroTypes {
  title: string,
  about: string,
}


interface HeroDisplayTypes {
  image: any
}

function HeroText({ title, about, isTop }: HeroTypes & HeroTextTypes) {
  // rendered twice but only show buttons once
  return <div className={"row-start-2 col-start-2 col-span-10 \
    sm:col-start-2 sm:col-span-6 \
    lg:col-span-4 lg:col-start-3 relative " + (isTop ? "z-10" : "z-0")}>
    <div className={isTop ? "opacity-70" : ""}>
      <div className="flex"><p
        className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-blue-900 tracking-tight
          lg:text-7xl xl:text-8xl text-6xl font-extrabold leading-tight">{title}</p></div>
      <p className="text-lg mt-8">{about}</p>
    </div>
    {isTop ? <div className="flex-row items-center flex mt-5 opacity-100">
      <ButtonArrow
        containerClassNames="mr-4"
        classNames="mr-4 rounded-full py-1.5 px-3 hover:bg-gray-700 bg-gray-900 text-gray-50 font-bold flex">About </ButtonArrow>
    </div> : null}
  </div>
}

HeroText.defaultProps = {isTop: false }

function HeroDisplay({image} : HeroDisplayTypes) {
  return <div
    className="relative col-start-10 col-span-3 md:col-start-9 xl:ml-0  mt-48 ml-10 row-end-2 sm:block hidden">
    {/*<div className="relative bg-gray-100 bg-opacity-50 shadow-2xl rounded-xl"*/}
    {/*     style={{ "height": 500, "width": 600 }}>*/}
    {/* TODO: gatsby img*/}
    <GatsbyImage fluid={image} alt={"Close up portrait of person"} />
    {/*</div>*/}
  </div>
}

export default function Hero({ title, about, image }: HeroTypes & HeroDisplayTypes) {
  return <div className="w-full h-full grid grid-cols-12 grid-rows-4 gap-4">
    <HeroText title={title} about={about} />
    <AngleGradient />
    <HeroText isTop title={title} about={about} />
    <HeroDisplay image={image}/>
  </div>
}
