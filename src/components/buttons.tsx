import * as React from "react"

export function ButtonArrow({ children, containerClassNames, classNames }) {
  return <div className={"group " + containerClassNames}>
    <button className={classNames}>{children}<span
      className="ml-4">{" >"}</span></button>
  </div>
}