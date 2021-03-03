import * as React from "react"

export function ButtonArrow({ children, containerClassNames, classNames, addToref}) {
  return <div className={"group " + containerClassNames}>
    <button ref={addToref} className={classNames}>{children}<span
      className="ml-4">{" >"}</span></button>
  </div>
}
ButtonArrow.defaultProps = {addToRef: null}