import * as React from "react"
import { Link, navigate } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import globalColours from "../styles/globalColours"

function NavBarButton({ className, children, to }: { className: string, children: string, to: string }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-9"}>
    <Link className={className ? className : " text-md font-medium whitespace-nowrap"}
          to={to}
    >{children}</Link>
  </div>
}

NavBarButton.defaultProps = { className: "" }

function NavBarMenu() {
  return <div className="flex justify-center flex-row my-1 font-medium font-display">
    <NavBarButton to="/about">About</NavBarButton>
  </div>
}

export function Navbar({ title }: { title: string }) {
  return <div
    className={`z-50 w-full ${globalColours.bgDark} ${globalColours.textLight} bg-opacity-95`}>
    <div className="flex flex-col justify-center sm:flex-row mx-auto">
      <NavBarButton className="font-bold font-display text-2xl my-1" to="/">{title}</NavBarButton>
      <NavBarMenu />
    </div>
  </div>
}
