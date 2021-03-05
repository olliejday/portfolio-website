import * as React from "react"
import { ButtonArrow } from "./buttons"
import { Link } from "gatsby"
import { preview } from "../assets/pages/about/aboutContents"
import globalColours from "../styles/globalColours"
import { useEffect, useRef } from "react"
import { indexTitleDropIn, slowScrollScale } from "../animations/animations"

const textBodySm = "lg:text-6xl text-3xl font-semibold font-display"

interface HeroTextTypes {
  title: string,
  isTop: boolean
}

interface HeroTypes {
  title: string,
}


function HeroTextButton({ to, animateRef }) {
  return <>
    <div className="flex-row items-center flex mt-10">
      <Link to={to}><ButtonArrow
        addToref={animateRef}
        containerClassNames="mr-4"
        classNames={`mr-4 rounded-full py-3 px-6 ${globalColours.accent} ${globalColours.accentHover} ${globalColours.textLightest} font-display font-medium flex ${textBodySm}`}>About </ButtonArrow>
      </Link>
    </div>
  </>
}

function HeroText({ title }: HeroTypes & HeroTextTypes) {
  const aboutSlug = "/about"
  const textAnimRefs = useRef([])
  textAnimRefs.current = []
  const addToRefs = refList => el => {
    if (el && !refList.current.includes(el)) {
      refList.current.push(el)
    }
  }
  // apply the animations once refs loaded
  useEffect(() => {
    textAnimRefs.current.forEach(el => {
      indexTitleDropIn(el)
    })
  }, [])
  // rendered twice but only show buttons once
  return <>
    <div className={`${textBodySm} ${globalColours.textLightest} row-start-2 col-span-10 \
    sm:col-span-6 lg:col-span-5 relative my-5 z-10`}>
      <div className="space-y-3 my-3">
        {preview.body.map(el => <p>{el}</p>)}
      </div>
      <div className="mt-10">
        <p>{preview.subtitle}</p>
        <div className="space-y-1 my-3">
          {preview.list.map((x, i) => <p key={i} className={`${textBodySm} ${globalColours.textLight}`}>{x}</p>)}
        </div>
      </div>
      <HeroTextButton to={aboutSlug} animateRef={addToRefs(textAnimRefs)} />
    </div>
  </>
}

function HeroDisplay() {
  const image = preview.image
  const imAnimRefs = useRef(null)
  // apply the animations once refs loaded
  useEffect(() => {
    slowScrollScale(imAnimRefs.current)
  }, [])
  return <div
    ref={imAnimRefs}
    className="relative col-span-5 col-start-7 row-start-2 flex-col justify-center sm:flex hidden">
    {image}
  </div>
}

export default function HeroIndex({ title }: HeroTypes) {
  return <div className={`w-full grid grid-cols-12 grid-rows-1 gap-2 pl-3 sm:pl-20 py-20 pb-10 md:mb-10 md:pb-20`}>
    <HeroText isTop title={title} />
    <HeroDisplay />
  </div>
}
