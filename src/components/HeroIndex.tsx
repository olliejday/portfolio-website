import * as React from "react"
import { ButtonArrow } from "./buttons"
import { AngleGradient } from "./angleGradients"
import { Link } from "gatsby"
import { preview } from "../assets/pages/about/aboutContents"


interface HeroTextTypes {
  title: string,
  isTop: boolean
}

interface HeroTypes {
  title: string,
}


function HeroTextContent(props: { title: string, element: (item) => JSX.Element }) {
  return <>
    <div className="flex"><p
      className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-blue-900 tracking-tight
          lg:text-9xl text-6xl font-extrabold leading-tight">{props.title}</p></div>
    <p className="text-3xl font-bold my-5">{preview.body.join(" ")}</p>
    <p className="text-2xl my-5">{preview.subtitle}</p>
    <div className="flex flex-col text-2xl">
      {preview.list.map(props.element)}
    </div>
  </>
}

function HeroTextButton(props: { top: boolean, to: string }) {
  return <>
    {props.top ? <div className="flex-row items-center flex mt-7 opacity-100">
      <Link to={props.to}><ButtonArrow
        containerClassNames="mr-4"
        classNames="mr-4 rounded-full py-2 px-5 hover:bg-gray-700 bg-gray-900 text-gray-50 text-2xl font-bold flex">About </ButtonArrow>
      </Link>
    </div> : null}
  </>
}

function HeroText({ title, isTop }: HeroTypes & HeroTextTypes) {
  const aboutSlug = "/about"
  // rendered twice but only show buttons once
  return <div className={"row-start-2 col-start-2 col-span-10 \
    sm:col-start-2 sm:col-span-6 \
    lg:col-span-5 lg:col-start-3 relative " + (isTop ? "z-10" : "z-0")}>
    <div className={isTop ? "opacity-70" : ""}>
      <HeroTextContent title={title} element={item => <p className="">{item}</p>} />
    </div>
    <HeroTextButton top={isTop} to={aboutSlug} />
  </div>
}

HeroText.defaultProps = { isTop: false }

function HeroDisplay() {
  const image = preview.image
  return <div
    className="relative col-span-4 col-start-8 row-end-3 sm:block hidden">
    {image}
  </div>
}

export default function HeroIndex({ title }: HeroTypes) {
  return <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-4 pb-10"
    // account for nav bar
              style={{ marginTop: -20 }}>
    <HeroText title={title} />
    <AngleGradient />
    <HeroText isTop title={title} />
    <HeroDisplay />
  </div>
}
