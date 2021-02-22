import * as React from "react"
import { Navbar } from "./Navbar"

export default function Layout({ title, children }) {
  return (
    <div className="absolute h-screen w-full overflow-x-hidden">
      <Navbar title={title} />
      {children}
    </div>
  )
}