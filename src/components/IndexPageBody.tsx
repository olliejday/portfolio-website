import * as React from "react"
import GatsbyImage from "gatsby-image"

function FullWidthPreview({ node, bgColour, imageLeft }) {
  return <div className={bgColour}>
    <div
      className={"xl:w-2/3 md:w-3/4 md:mx-auto px-10 py-10 flex flex-col " +
      (imageLeft ? "lg:flex-row-reverse" : "lg:flex-row")}>
      <div className="flex lg:w-1/2 flex-col justify-end lg:mx-5">
        <p className="my-5 text-purple-500 font-bold">{node.frontmatter.subtitle}</p>
        <p className="text-4xl my-5 text-gray-700 font-bold">{node.frontmatter.title}</p>
        <p className="my-5 text-gray-700 hidden md:block">We bring together everything that’s required to build
          websites and apps
          that accept payments and send payouts
          globally. Stripe’s products power payments for
          and everything in between. </p>
      </div>
      <div className="flex flex-col w-full align-bottom justify-end lg:mx-5 my-5">
        <GatsbyImage fluid={node.frontmatter.image.childImageSharp.fluid}
                     className="w-full"
                     imgStyle={{ objectFit: "contain", pointerEvents: "none" }}
                     alt="Preview of design"
        />
      </div>
    </div>
  </div>
}

FullWidthPreview.defaultProps = { imageLeft: false }

function HalfWidthPreview({ node }) {
  return <div className="flex flex-1 flex-col mx-5">
      <p className="my-5 text-purple-500 font-bold">{node.frontmatter.subtitle}</p>
      <p className="text-4xl my-5 text-gray-700 font-bold">{node.frontmatter.title}</p>
      <p className="my-5 text-gray-700 hidden md:block">We bring together everything that’s required to build
        websites and apps
        that accept payments and send payouts
        globally. Stripe’s products power payments for
        and everything in between. </p>
      <GatsbyImage fluid={node.frontmatter.image.childImageSharp.fluid}
                   className="w-full my-5"
                   imgStyle={{ objectFit: "contain", pointerEvents: "none" }}
                   alt="Preview of design"
      />
    </div>
}

function DoublePreview({ nodeLeft, nodeRight, bgColour }) {
  return <div className={bgColour}>
    <div className={"xl:w-2/3 md:w-3/4 md:mx-auto py-10 flex flex-row"}>
      <HalfWidthPreview node={nodeLeft} />
      <HalfWidthPreview node={nodeRight} />
    </div>
  </div>
}

export function IndexPageBody({ data }: any) {
  let node = data.markdownPages.nodes[0]
  return <div>
    {/*<FullWidthPreview node={node} bgColour="bg-gray-100" />*/}
    <FullWidthPreview node={node} bgColour="bg-gray-200" imageLeft />
    <DoublePreview nodeLeft={node} nodeRight={node} bgColour={"bg-gray-100"} />
  </div>
}