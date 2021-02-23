import * as React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

function PreviewText({ data }) {
  return <>
    <Link to={data.fields.slug}><p className="mb-5 text-3xl text-purple-500 font-bold">{data.frontmatter.subtitle}</p></Link>
    <Link to={data.fields.slug}><p className="text-7xl my-5 text-gray-700 font-bold">{data.frontmatter.title}</p></Link>
  </>
}

function FullWidthPreview({ node, bgColour, imageLeft }) {
  const data = node.childMdx
  return <div className={"h-80vh lg:h-60vh " + bgColour}>
    <div
      className={"xl:w-2/3 md:w-3/4 h-full md:mx-auto px-10 py-16 box-border flex flex-col " +
      (imageLeft ? "lg:flex-row-reverse" : "lg:flex-row")}>
      <div className={"flex lg:w-1/2 lg:h-full flex-col justify-end lg:mx-5 " +
      (imageLeft ? "items-end lg:items-start" : "")}>
        <PreviewText data={data} />
      </div>
      <div className="w-full h-2/3 my-8 lg:h-full lg:mx-5 lg:my-0 box-border">
        <PreviewImage data={data} />
      </div>
    </div>
  </div>
}

FullWidthPreview.defaultProps = { imageLeft: false }

function PreviewImage({ data }) {
  return <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid}
                      className="md:my-0 my-5 bg-opacity-20 bg-black"
                      style={{ height: "100%" }}
                      imgStyle={{ objectFit: "contain", pointerEvents: "none" }}
                      alt="Preview of design"
  />
}

function HalfWidthPreview({ node }) {
  const data = node.childMdx
  return <div className="flex h-full justify-around flex-1 flex-col items-center text-center mx-6 my-5">
    <div className="flex flex-col justify-end">
      <PreviewText data={data} />
    </div>
    <div className="w-full h-2/3 my-8 lg:mx-5 lg:my-0 box-border">
      <PreviewImage data={data} />
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
  const uxEdges = data.uxPages.edges
  const uxPreviews = []
  const devEdges = data.devPages.edges
  const devPreviews = []
  // setup the previews, they are sorted by frontmatter.order
  for (let i = 0; i < uxEdges.length; i += 3) {
    // every third is a full
    // then two as a double
    uxPreviews.push(<FullWidthPreview key={"ux" + i} node={uxEdges[i].node} bgColour="bg-gray-200" imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < uxEdges.length) uxPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={uxEdges[i + 1].node} nodeRight={uxEdges[i + 2].node}
                                                           bgColour={"bg-gray-100"} />)
    else if (i + 1 < uxEdges.length) uxPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={uxEdges[i + 1].node} bgColour="bg-gray-100"
                                                                   imageLeft={(i / 3) % 2 !== 0} />)
  }

  for (let i = 0; i < devEdges.length; i += 3) {
    // every third is a full
    // then two as a double

    devPreviews.push(<FullWidthPreview key={"ux" + i} node={devEdges[i].node} bgColour="bg-blue-200" imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < devEdges.length) devPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={devEdges[i + 1].node} nodeRight={devEdges[i + 2].node}
                                                             bgColour={"bg-blue-100"} />)
    else if (i + 1 < devEdges.length) devPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={devEdges[i + 1].node} bgColour="bg-blue-100"
                                                                     imageLeft={(i / 3) % 2 !== 0} />)
  }
  return <div>
    <div id="devPreviews">
      {devPreviews}
    </div>
    <div id="uxPreviews">
      {uxPreviews}
    </div>
  </div>
}