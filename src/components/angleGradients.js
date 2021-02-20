import React from "react"

export function AngleGradient() {
  return <div
    className="absolute transform -translate-x-52 -translate-y-96 lg:top-20 top-0
    -rotate-12 bg-gradient-to-r from-pink-500 via-yellow-300 to-purple-600"
    style={{ height: 600, width: 2000 }} />
}

export function BlueBGRotated() {
  return <div
    className="absolute transform -translate-x-52 -translate-y-44
         -rotate-12 bg-gradient-to-r from-blue-900 via-green-900 to-blue-900" style={{ height: 900, width: 2000 }} />
}