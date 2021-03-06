import * as React from "react"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"
import globalColours from "../styles/globalColours"
import { useEffect, useRef } from "react"
import { indexPageImageAnimation, indexPagePreviewTextAnimation, slowScrollScale } from "../animations/animations"

const textLg = "xl:text-8xl md:text-6xl text-5xl"
const textMd = "xl:text-6xl md:text-5xl text-4xl"

function PreviewText({ data, textColour, animRefs }) {
  return <>
    <div className="relative">
      <Link to={data.fields.slug}>
        <p
        key={data.frontmatter.title + "1"}
        ref={animRefs}
        className={`${textLg} ${textColour} my-5 font-semibold font-display`}>{data.frontmatter.title}</p>
      </Link>
    </div>
    <div className="relative">
      <Link to={data.fields.slug}>
        <p
        key={data.frontmatter.subtitle + "2"}
        ref={animRefs}
        className={`${textMd} ${globalColours.textLight} text-opacity-80 mt-5 font-display font-medium`}>{data.frontmatter.subtitle}</p>
      </Link>
    </div>
  </>
}

function FullWidthPreview({ node, bgColour, textColour, textAnimRefs, imageAnimRefs, imageLeft }) {
  const data = node.childMdx
  const slug = data.fields.slug
  return <div className={`sm:px-10 pb-10`}>
    <div
      className={`${bgColour} overflow-hidden w-full mx-auto px-3 md:px-10 xl:px-28 py-8 box-border grid ` +
      `grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 grid-flow-row-dense gap-16`}>
      <div
        className={`flex flex-col justify-start lg:justify-end mx-5 lg:pt-28 lg:pb-16 row-start-1 ${imageLeft ? "lg:col-start-2" : "lg:col-start-1"}`}
        style={{ minHeight: "25vh" }}>
        <PreviewText data={data} textColour={textColour} animRefs={textAnimRefs} />
      </div>
      <div
        className={`relative w-full h-full row-start-2 lg:row-start-1 ${imageLeft ? "lg:col-start-1" : "lg:col-start-2"}`}>
        <PreviewImage data={data} to={slug} animRefs={imageAnimRefs} />
      </div>
    </div>
  </div>
}


FullWidthPreview.defaultProps = { imageLeft: false }

function PreviewImage({ data, to, animRefs }) {
  return <div ref={animRefs} className="absolute top-0 w-full h-full">
      <Link to={to}>
        <GatsbyImage fluid={data.frontmatter.image.childImageSharp.fluid}
                     imgStyle={{ objectFit: "cover", pointerEvents: "none" }}
                     alt="Preview of design"
        />
      </Link>
  </div>

}

function HalfWidthPreview({ node, bgColour, textColour, textAnimRefs, imageAnimRefs }) {
  const data = node.childMdx
  const slug = data.fields.slug
  return <div
    className={`w-full px-10 lg:mx-5 py-6 my-5 overflow-hidden box-border grid grid-rows-2 gap-16 ${bgColour}`}>
    <div className="flex flex-col justify-start lg:pb-16"
         style={{ minHeight: "25vh" }}>
    <PreviewText data={data} textColour={textColour} animRefs={textAnimRefs} />
    </div>
    <div className={`relative  w-full h-full row-start-2`}>
      <PreviewImage data={data} to={slug} animRefs={imageAnimRefs} />
    </div>
  </div>
}

function DoublePreview({
                         nodeLeft, nodeRight,
                         bgColourLeft, bgColourRight,
                         textColourLeft, textColourRight,
                         textAnimRefs, imageAnimRefs
                       }) {
  return <div className={`overflow-hidden sm:px-10 pb-10`}>
    <div className={"w-full flex flex-col lg:flex-row"}>
      <HalfWidthPreview node={nodeLeft} bgColour={bgColourLeft} textColour={textColourLeft} textAnimRefs={textAnimRefs}
                        imageAnimRefs={imageAnimRefs} />
      <HalfWidthPreview node={nodeRight} bgColour={bgColourRight} textColour={textColourRight}
                        textAnimRefs={textAnimRefs} imageAnimRefs={imageAnimRefs} />
    </div>
  </div>
}

export function IndexPageBody({ data }: any) {
  const textAnimRefs = useRef([])
  textAnimRefs.current = []
  const imageAnimRefs = useRef([])
  imageAnimRefs.current = []
  const addToRefs = refList => el => {
    if (el && !refList.current.includes(el)) {
      refList.current.push(el)
    }
  }
  // apply the animations once refs loaded
  useEffect(() => {
    textAnimRefs.current.forEach(el => {
      indexPagePreviewTextAnimation(el)
    })
    imageAnimRefs.current.forEach(el => {
      indexPageImageAnimation(el)
    })
  }, [])


  const uxEdges = data.uxPages.edges
  const uxPreviews = []
  const devEdges = data.devPages.edges
  const devPreviews = []
  // setup the previews, they are sorted by frontmatter.order
  for (let i = 0; i < uxEdges.length; i += 3) {
    // every third is a full
    // then two as a double

    uxPreviews.push(<FullWidthPreview key={"ux" + i} node={uxEdges[i].node} bgColour={globalColours.bgDark}
                                      textColour={globalColours.textLightest}
                                      textAnimRefs={addToRefs(textAnimRefs)}
                                      imageAnimRefs={addToRefs(imageAnimRefs)}
                                      imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < uxEdges.length) uxPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={uxEdges[i + 1].node}
                                                               nodeRight={uxEdges[i + 2].node}
                                                               bgColourLeft={globalColours.bgDark}
                                                               bgColourRight={globalColours.bgDark}
                                                               textColourLeft={globalColours.textLightest}
                                                               textColourRight={globalColours.textLightest}
                                                               textAnimRefs={addToRefs(textAnimRefs)}
                                                               imageAnimRefs={addToRefs(imageAnimRefs)} />)

    else if (i + 1 < uxEdges.length) uxPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={uxEdges[i + 1].node}
                                                                       bgColour={globalColours.bgDark}
                                                                       textColour={globalColours.textLightest}
                                                                       textAnimRefs={addToRefs(textAnimRefs)}
                                                                       imageAnimRefs={addToRefs(imageAnimRefs)}
                                                                       imageLeft={(i / 3) % 2 !== 0} />)
  }

  for (let i = 0; i < devEdges.length; i += 3) {
    // every third is a full
    // then two as a double
    devPreviews.push(<FullWidthPreview key={"ux" + i} node={devEdges[i].node} bgColour={globalColours.bgDark}
                                       textColour={globalColours.textLightest}
                                       textAnimRefs={addToRefs(textAnimRefs)}
                                       imageAnimRefs={addToRefs(imageAnimRefs)}
                                       imageLeft={(i / 3) % 2 === 0} />)
    if (i + 2 < devEdges.length) devPreviews.push(<DoublePreview key={"ux" + i + 1} nodeLeft={devEdges[i + 1].node}
                                                                 nodeRight={devEdges[i + 2].node}
                                                                 bgColourLeft={globalColours.bgDark}
                                                                 bgColourRight={globalColours.bgDark}
                                                                 textColourLeft={globalColours.textLightest}
                                                                 textColourRight={globalColours.textLightest}
                                                                 textAnimRefs={addToRefs(textAnimRefs)}
                                                                 imageAnimRefs={addToRefs(imageAnimRefs)} />)

    else if (i + 1 < devEdges.length) devPreviews.push(<FullWidthPreview key={"ux" + i + 1} node={devEdges[i + 1].node}
                                                                         bgColour={globalColours.bgDark}
                                                                         textColour={globalColours.textLightest}
                                                                         textAnimRefs={addToRefs(textAnimRefs)}
                                                                         imageAnimRefs={addToRefs(imageAnimRefs)}
                                                                         imageLeft={(i / 3) % 2 !== 0} />)
  }
  return <div className="pb-6 md:pb-36 lg:pb-48">
    <div id="devPreviews">
      {devPreviews}
    </div>
    <div id="uxPreviews">
      {uxPreviews}
    </div>
  </div>
}