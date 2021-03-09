import * as React from "react"
import { ButtonArrow } from "./buttons"
import { Link } from "gatsby"
import { preview } from "../assets/pages/about/aboutContents"
import globalColours from "../styles/globalColours"

const textBodySm = "lg:text-6xl text-3xl font-semibold font-display"

interface HeroTextTypes {
  title: string,
  isTop: boolean
}

interface HeroTypes {
  title: string,
}


function HeroTextButton({ to }) {
  return <>
    <div className="flex-row items-center flex mt-10">
      <Link to={to}><ButtonArrow
        containerClassNames="mr-4"
        classNames={`mr-4 rounded-full py-3 px-6 ${globalColours.accent} ${globalColours.accentHover} ${globalColours.textLightest} font-display font-medium flex ${textBodySm}`}>About </ButtonArrow>
      </Link>
    </div>
  </>
}

function HeroText({ title }: HeroTypes & HeroTextTypes) {
  const aboutSlug = "/about"
  // rendered twice but only show buttons once
  return <>
    <div className={`${textBodySm} ${globalColours.textLightest} row-start-2 col-span-10 \
    sm:col-span-6 lg:col-span-5 relative my-5 z-10`}
         data-scroll data-scroll-speed="1.5" data-scroll-delay="0.3">
      <div className="space-y-3 my-3">
        {preview.body.map((el, i) => <p key={"body " + i}>{el}</p>)}
      </div>
      <div className="mt-10">
        <p>{preview.subtitle}</p>
        <div className="space-y-1 my-3">
          {preview.list.map((x, i) => <p key={"list" + i} className={`${textBodySm} ${globalColours.textLight}`}>{x}</p>)}
        </div>
      </div>
      <HeroTextButton to={aboutSlug} />
    </div>
  </>
}

function HeroDisplay() {
  const image = preview.image
  return <div
    className="relative col-span-5 col-start-7 row-start-2 mt-40 flex-col justify-center sm:flex hidden"
    data-scroll
    data-scroll-speed="3">
    {image}
  </div>
}

export default function HeroIndex({ title }: HeroTypes) {
  return <div className={`w-full grid grid-cols-12 grid-rows-1 gap-2 pl-3 sm:pl-20 py-20 pb-10 md:mb-10 md:pb-20`}>
    <HeroText isTop title={title} />
    <HeroDisplay />
  </div>
}
