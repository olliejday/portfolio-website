import * as React from "react"
import { Link, navigate } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import globalColours from "../styles/globalColours"

function NavBarButton({ className, children, to }: { className: string, children: string, to: string }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-9"}>
    <button className={className ? className : " text-md font-medium whitespace-nowrap"}
            onClick={() => {
              const [toPage, toSection] = to.split("#")
              // if already on index page and want index page
              if (window.location.pathname === "/" && toPage === "/") {
                if (to !== "/") scrollTo(to.substring(1))
              } else {
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
  return <div className="flex justify-center flex-row my-1">
    {/*<NavBarButton to="/#devPreviews">Development</NavBarButton>*/}
    <NavBarButton to="/#uxPreviews">Design</NavBarButton>
    <NavBarButton to="/about">About</NavBarButton>
  </div>
}

export function Navbar({ title }: { title: string }) {
  return <div
    className={`fixed z-50 w-full ${globalColours.bgDark} ${globalColours.textLight} bg-opacity-95`}>
    <div className="flex flex-col justify-center sm:flex-row mx-auto">
      <NavBarButton className="font-bold font-display text-2xl my-1" to="/">{title}</NavBarButton>
      <NavBarMenu />
    </div>
  </div>
}
