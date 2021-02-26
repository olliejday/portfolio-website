import * as React from "react"
import { Link, navigate } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import globalColours from "../styles/globalColours"

function NavBarButton({ className, children, to }: { className: string, children: string, to: string }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-3"}>
    <button className={className ? className : " text-md font-medium whitespace-nowrap"}
            onClick={() => {
              const [toPage, toSection] = to.split("#")
              // if already on index page and want index page
              if (window.location.pathname === "/" && toPage === "/") {
                if (to !== "/") scrollTo(to.substring(1))
              }
              else{
                // go to page
                navigate(toPage)
                // wait to navigate to other page then scroll
                setTimeout(() => scrollTo("#" + toSection), 250)
              }
            }}
    >{children}</button>
  </div>
}

NavBarButton.defaultProps = { className: "" }

function NavBarMenu() {
  return <div className="w-1/2 justify-between sm:justify-around flex my-1">
    {/*<NavBarButton to="/#devPreviews">Development</NavBarButton>*/}
    <NavBarButton to="/#uxPreviews">Design</NavBarButton>
    <NavBarButton to="/about">About</NavBarButton>
  </div>
}

export function Navbar({ title }: { title: string }) {
  return <div
    className={`fixed z-50 flex flex-col items-center sm:flex-row z-20 justify-around w-full
      ${globalColours.bgDark} ${globalColours.textLight} bg-opacity-95`}>
    <div className="flex items-center">
      <NavBarButton className="font-bold font-display text-2xl my-1" to="/">{title}</NavBarButton>
    </div>
    <NavBarMenu />
  </div>
}
