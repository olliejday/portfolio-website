import * as React from "react"
import { ButtonArrow } from "./buttons"
import { Link } from "gatsby"
import { preview } from "../assets/pages/about/aboutContents"
import globalColours from "../styles/globalColours"

const textTitle = "lg:text-9xl md:text-8xl text-6xl font-extrabold font-display"
const textBodySm = "xl:text-3xl text-2xl font-medium"

interface HeroTextTypes {
  title: string,
  isTop: boolean
}

interface HeroTypes {
  title: string,
}


function HeroTextContent(props: { title: string, element: (item) => JSX.Element }) {
  return <>
    <div className="flex">
      <p
        className={`${textTitle} ${globalColours.textLightest} mb-10`}>{props.title}</p>
    </div>
    <p className={`${textBodySm} ${globalColours.textLight} my-5`}>{preview.body.join(" ")}</p>
    <p className={`${textBodySm} ${globalColours.textLight} my-5`}>{preview.subtitle}</p>
    <div className={`flex flex-col ${textBodySm} ${globalColours.textLight}`}>
      {preview.list.map(props.element)}
    </div>
  </>
}

function HeroTextButton(props: { top: boolean, to: string }) {
  return <>
    {props.top ? <div className="flex-row items-center flex mt-9">
      <Link to={props.to}><ButtonArrow
        containerClassNames="mr-4"
        classNames={`mr-4 rounded-full py-2 px-5 ${globalColours.accent} ${globalColours.accentHover} ${globalColours.textLightest} font-semibold flex ${textBodySm}`}>About </ButtonArrow>
      </Link>
    </div> : null}
  </>
}

function HeroText({ title, isTop }: HeroTypes & HeroTextTypes) {
  const aboutSlug = "/about"
  // rendered twice but only show buttons once
  return <div className={"row-start-1 col-start-1 col-span-10 \
    sm:col-start-2 sm:col-span-6 \
    lg:col-span-5 lg:col-start-2 relative " + (isTop ? "z-10" : "z-0")}>
    <div className={""}>
      <HeroTextContent title={title} element={item => <p className="">{item}</p>} />
    </div>
    <HeroTextButton top={isTop} to={aboutSlug} />
  </div>
}

HeroText.defaultProps = { isTop: false }

function HeroDisplay() {
  const image = preview.image
  return <div
    className="relative col-span-5 col-start-8 row-start-1 flex-col justify-end lg:justify-center sm:flex hidden">
    {image}
  </div>
}

export default function HeroIndex({ title }: HeroTypes) {
  return <div className={`w-full grid grid-cols-12 grid-rows-1 gap-2 mt-10 pt-10 mb-10 pb-20 lg:py-24`}>
    <HeroText isTop title={title} />
    <HeroDisplay />
  </div>
}
