import * as React from "react"
import { Link } from "gatsby"


function NavBarButton({ className, children, to }: { className: string, children: string, to: string }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-3"}>
    <Link className={className ? className : "font-bold whitespace-nowrap"} to={to}>{children}</Link>
  </div>
}

NavBarButton.defaultProps = { className: "" }

function NavBarMenu() {
  return <div className="w-1/2 justify-around flex">
      <NavBarButton to="/">Development</NavBarButton>
      <NavBarButton to="/">Design</NavBarButton>
      <NavBarButton to="/about">About</NavBarButton>
  </div>
}

export function Navbar({title} : {title : string}) {
  return <div
    className="flex flex-col items-center sm:flex-row relative z-20 h-20 justify-around w-full
    bg-opacity-50 bg-blue-600 text-gray-50">
    <div className="flex items-center">
      <NavBarButton className="font-extrabold text-2xl" to="/">{title}</NavBarButton>
    </div>
    <NavBarMenu />
    </div>
}
