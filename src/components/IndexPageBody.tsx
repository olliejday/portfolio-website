import * as React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

const textLg = "xl:text-8xl text-7xl"
const textMd = "xl:text-5xl text-4xl"

function PreviewText({ data }) {
  return <>
    <Link to={data.fields.slug}><p className={`${textLg} my-5 text-gray-700 font-bold font-display`}>{data.frontmatter.title}</p>
    </Link>
    <Link to={data.fields.slug}><p
      className={`${textMd} mt-5 text-gray-600 font-semibold font-display`}>{data.frontmatter.subtitle}</p>
    </Link>
  </>
}

function FullWidthPreview({ node, bgColour, imageLeft }) {
  const data = node.childMdx
  const slug = data.fields.slug
  return <div className={`${bgColour}`}>
    <div
      className={"w-full mx-auto px-10 lg:px-28 py-8 box-border grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 grid-flow-row-dense gap-16"}>
      <div
        className={`flex flex-col justify-start lg:justify-end mx-5 lg:pt-28 lg:pb-16 row-start-1 ${imageLeft ? "lg:col-start-2" : "lg:col-start-1"}`}
      style={{minHeight: "24rem"}}>
        <PreviewText data={data} />
      </div>
      <div
        className={`relative overflow-hidden w-full h-full row-start-2 lg:row-start-1 ${imageLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
        <PreviewImage data={data} to={slug} />
      </div>
    </div>
  </div>
}


FullWidthPreview.defaultProps = { imageLeft: false }

function PreviewImage({ data, to }) {
  return <Link className="absolute top-0 w-full h-full" to={to}>
    <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid}
                 imgStyle={{ objectFit: "cover", pointerEvents: "none" }}
                 alt="Preview of design"
    />
  </Link>
}

function HalfWidthPreview({ node, bgColour }) {
  const data = node.childMdx
  const slug = data.fields.slug
  return <div
    className={`w-full px-10 md:mx-5 py-6 my-5 box-border grid grid-rows-2 gap-16 ${bgColour}`}>
    <div className="flex flex-col justify-start lg:pb-16">
      <PreviewText data={data} />
    </div>
    <div className={`relative overflow-hidden w-full h-full row-start-2`}>
      <PreviewImage data={data} to={slug} />
    </div>
  </div>
}

function DoublePreview({ nodeLeft, nodeRight, bgColourLeft, bgColourRight }) {
  return <div className={`overflow-hidden`}>
    <div className={"w-full md:py-5 px-5 flex flex-col md:flex-row"}>
      <HalfWidthPreview node={nodeLeft} bgColour={bgColourLeft} />
      <HalfWidthPreview node={nodeRight} bgColour={bgColourRight}  />
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

    uxPreviews.push(<FullWidthPreview key={"ux" + i} node={uxEdges[i].node} bgColour="bg-gray-200"
                                      imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < uxEdges.length) uxPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={uxEdges[i + 1].node}
                                                               nodeRight={uxEdges[i + 2].node}
                                                               bgColourLeft={"bg-gray-100"} bgColourRight={"bg-gray-200"} />)
    else if (i + 1 < uxEdges.length) uxPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={uxEdges[i + 1].node}
                                                                       bgColour="bg-gray-100"
                                                                       imageLeft={(i / 3) % 2 !== 0} />)
  }

  for (let i = 0; i < devEdges.length; i += 3) {
    // every third is a full
    // then two as a double

    devPreviews.push(<FullWidthPreview key={"ux" + i} node={devEdges[i].node} bgColour="bg-gray-200"
                                       imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < devEdges.length) devPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={devEdges[i + 1].node}
                                                                 nodeRight={devEdges[i + 2].node}
                                                                 bgColourLeft={"bg-gray-100"} bgColourRight={"bg-gray-200"} />)
    else if (i + 1 < devEdges.length) devPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={devEdges[i + 1].node}
                                                                         bgColour="bg-gray-100"
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