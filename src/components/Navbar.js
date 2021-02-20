import { ButtonArrow } from "./buttons"
import React, { useState } from "react"


function NavBarButton({ className, children }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-3 " + className}>
    <button className="font-bold whitespace-nowrap">{children}</button>
  </div>
}

function NavBarMenu({ className }) {
  return <>
    <div className={"flex-1 items-center justify-between text-sm  my-2 flex-col sm:flex-row " + className}>
      <NavBarButton>Development</NavBarButton>
      <NavBarButton>Design</NavBarButton>
      <NavBarButton>About</NavBarButton>
    </div>
  </>
}

function NavBarMenuMobile({ className }) {
  return <div className={"sm:hidden grid-rows-3 grid-cols-2 grid bg-gray-100 text-sm text-gray-700 gap-x-10 " +
  "rounded px-3 py-3 " + className}>
    <NavBarButton className="col-start-1 row-start-1">Development</NavBarButton>
    <NavBarButton className="col-start-1 row-start-2">Design</NavBarButton>
    <NavBarButton className="col-start-1 row-start-3">About</NavBarButton>
  </div>
}

export function Navbar() {
  const [hidden, setHidden] = useState(true)
  return <div
    className="mt-3 flex flex-col md:flex-row items-center justify-between absolute z-10 h-20 w-screen bg-transparent text-gray-50">
    <div className="flex-auto w-full sm:w-auto flex items-center justify-around my-2">
      <p className="font-extrabold text-2xl">Oliver Day</p>
      <div className="flex flex-col items-center justify-center sm:hidden" onClick={() => {
        if (hidden) {
          setHidden(false)
        } else {
          setHidden(true)
        }
      }}>
        <svg className={"w-8"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd" />
        </svg>
      </div>
    </div>
    <NavBarMenuMobile className={hidden ? "hidden" : "flex"} />
    <NavBarMenu className="hidden sm:flex" />
  </div>
}