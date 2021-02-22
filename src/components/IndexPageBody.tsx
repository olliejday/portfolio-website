import * as React from "react"
import GatsbyImage from "gatsby-image"

function FullWidthPreview({ node, bgColour, imageLeft }) {
  const data = node.childMdx
  return <div className={"h-80vh lg:h-60vh " + bgColour}>
      <div
        className={"xl:w-2/3 md:w-3/4 h-full md:mx-auto px-10 py-16 box-border flex flex-col " +
        (imageLeft ? "lg:flex-row-reverse" : "lg:flex-row")}>
        <div className={"flex lg:w-1/2 lg:h-full flex-col justify-end lg:mx-5 " +
        (imageLeft ? "items-end lg:items-start" : "")}>
          <p className="my-5 text-purple-500 font-bold">{data.frontmatter.subtitle}</p>
          <p className="text-4xl my-5 text-gray-700 font-bold">{data.frontmatter.title}</p>
        </div>
        <div className="w-full h-2/3 my-8 lg:h-full lg:mx-5 lg:my-0 box-border">
          <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid}
                       className="md:my-0 my-5 bg-opacity-20 bg-black"
                       style={{ height: "100%" }}
                       imgStyle={{ objectFit: "contain", pointerEvents: "none" }}
                       alt="Preview of design"
          />
        </div>
      </div>
  </div>
}

FullWidthPreview.defaultProps = { imageLeft: false }

function HalfWidthPreview({ node }) {
  const data = node.childMdx
  return <div className="flex h-full justify-between flex-1 flex-col items-center text-center mx-6 my-5">
    <div className="flex flex-col justify-end">
      <p className="my-5 text-purple-500 font-bold">{data.frontmatter.subtitle}</p>
      <p className="text-4xl my-5 text-gray-700 font-bold">{data.frontmatter.title}</p>
    </div>
    <div className="w-full h-2/3 my-8 lg:mx-5 lg:my-0 box-border">
      <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid}
                   className="md:my-0 my-5 bg-opacity-20 bg-black"
                   style={{ height: "100%" }}
                   imgStyle={{ objectFit: "contain", pointerEvents: "none" }}
                   alt="Preview of design"
      />
    </div>
  </div>
}

function DoublePreview({ nodeLeft, nodeRight, bgColour }) {
  return <div className={"h-80vh " + bgColour}>
    <div className={"xl:w-2/3 md:w-3/4 md:mx-auto h-full py-10 flex flex-col sm:flex-row"}>
      <HalfWidthPreview node={nodeLeft} />
      <HalfWidthPreview node={nodeRight} />
    </div>
  </div>
}

export function IndexPageBody({ data }: any) {
  const edges = data.uxPages.edges
  let previews = []
  // setup the previews, they are sorted by frontmatter.order
  for (let i = 0; i < edges.length; i += 3) {
    // every third is a full
    // then two as a double

    // TODO: delete this line it's testing
    previews.push(<DoublePreview nodeLeft={edges[i].node} nodeRight={edges[i + 1].node}
                                 bgColour={"bg-gray-100"} />)

    previews.push(<FullWidthPreview node={edges[i].node} bgColour="bg-gray-200" imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < edges.length) previews.push(<DoublePreview nodeLeft={edges[i + 1].node} nodeRight={edges[i + 2].node}
                                                           bgColour={"bg-gray-100"} />)
    else if (i + 1 < edges.length) previews.push(<FullWidthPreview node={edges[i + 1].node} bgColour="bg-gray-100"
                                                                   imageLeft={(i / 3) % 2 !== 0} />)
  }
  return <div>
    {previews}
  </div>
}