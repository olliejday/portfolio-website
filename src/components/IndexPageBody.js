import { ButtonArrow } from "./buttons"
import React from "react"

export function IndexPageBody() {
  return <div className="xl:w-2/3 lg:w-3/4 lg:mx-auto px-10">
    <div className="flex flex-col justify-around items-start">
      <div className="mt-10 md:w-1/2">
        <p className="my-10 text-purple-500 font-bold">Unified platform</p>
        <p className="text-4xl text-gray-700 font-bold">A fully integrated
          suite
          of payments products</p>
      </div>
      <div className="my-10 flex lg:flex-row flex-col">
        <p className="flex-1 my-5 lg:mr-3 text-gray-700">We bring together everything that’s required to build
          websites and apps
          that accept payments and send payouts
          globally. Stripe’s products power payments for
          <span className="text-purple-500 font-bold"> online and in-person retailers, subscriptions businesses,
            software platforms and marketplaces, </span>
          and everything in between. </p>
        <p className="flex-1 my-5 lg:ml-3 text-gray-700">We also help companies <span
          className="text-purple-500 font-bold">beat fraud, send invoices, issue virtual
            and physical cards, get financing, manage
            business spend, </span> and much more. </p>
      </div>
    </div>
    <ButtonArrow containerClassNames="mb-20" classNames="h-10 text-left w-48 rounded-full px-4 py-1
      bg-indigo-600 hover:bg-indigo-500 text-gray-50 text-xs font-bold shadow-lg flex items-center">Start with
      payments</ButtonArrow>
  </div>
}