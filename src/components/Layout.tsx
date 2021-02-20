import * as React from "react"

export default function Layout({ children }) {
  return (
    <div className="absolute h-screen w-full overflow-x-hidden">
      {children}
    </div>
  )
}