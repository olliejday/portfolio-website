import * as React from "react"


function NavBarButton({ className, children }: { className: string, children: string }) {
  return <div className={"h-full flex flex-col justify-center items-center group mx-3 " + className}>
    <button className="font-bold whitespace-nowrap">{children}</button>
  </div>
}

NavBarButton.defaultProps = { className: "" }

function NavBarMenu() {
  return <div className="w-1/2 justify-around flex">
      <NavBarButton>Development</NavBarButton>
      <NavBarButton>Design</NavBarButton>
      <NavBarButton>About</NavBarButton>
  </div>
}

export function Navbar({title} : {title : string}) {
  return <div
    className="flex flex-col items-center sm:flex-row absolute z-20 h-20 justify-around w-full bg-transparent text-gray-50">
    <div className="flex items-center">
      <p className="font-extrabold text-2xl">{title}</p>
    </div>
    <NavBarMenu />
    </div>
}
