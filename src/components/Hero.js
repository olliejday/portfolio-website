import { ButtonArrow } from "./buttons"
import React from "react"
import { AngleGradient } from "./angleGradients"

function HeroText({ className, isTop }) {
  // rendered twice but only show buttons once
  return <div className="row-start-2 col-start-2 col-span-10
  sm:col-start-2 sm:col-span-6
  lg:col-span-4 lg:col-start-3">
    <div className={className}>
      <div className="flex"><p
        className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-blue-900 tracking-tighter
          lg:text-7xl xl:text-8xl text-6xl font-extrabold leading-tight">Payments
        infrastructure for the
        internet</p></div>
      <p className="text-lg mt-8">Millions of businesses of all sizes—from startups to large
        enterprises—use
        Stripe’s software and APIs to
        accept payments, send payouts, and manage their businesses online. </p>
    </div>
    {isTop ? <div className="flex-row items-center flex mt-5 opacity-100">
      <ButtonArrow
        containerClassNames="mr-4"
        classNames="mr-4 rounded-full py-1.5 px-3 hover:bg-gray-700 bg-gray-900 text-gray-50 font-bold flex">Start
        now</ButtonArrow>
      <ButtonArrow containerClassNames="mx-4" classNames="font-bold flex">Contact sales</ButtonArrow>
    </div> : null}
  </div>
}


function HeroDisplay() {
  return <div className="col-start-10 md:col-start-9 xl:ml-0 ml-10 row-start-2 sm:block hidden">
    <div className="relative bg-gray-100 bg-opacity-50 shadow-2xl rounded-xl"
         style={{"height": 500, "width": 600}}>
    </div>
  </div>
}

export default function Hero() {
  return <div className="w-full h-full grid grid-cols-12 grid-rows-4 gap-4">
    <HeroText />
    <AngleGradient />
    <HeroText className="opacity-80" isTop />
    <HeroDisplay />
  </div>
}
