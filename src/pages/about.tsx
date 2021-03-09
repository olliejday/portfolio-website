import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import about from "../assets/pages/about/aboutContents"
import { AboutSection } from "../components/AboutSection"
import globalColours from "../styles/globalColours"
import { useEffect, useRef } from "react"


export default function AboutPage() {
  const scrollRef = useRef(null)
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true
      })
      setTimeout(() => scroll.update(), 300)
      setTimeout(() => {
        let dynamicBackgrounds = [];
        let dynamicColorElements = [];

        scroll.on('scroll', (instance) => {
          const progress = 360 * instance.scroll.y / instance.limit;

          scroll.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;

          dynamicBackgrounds.forEach(obj => {
            obj.el.style.backgroundColor = `hsl(${progress}, 11%, 81%)`;
          });
          dynamicColorElements.forEach(obj => {
            obj.el.style.color = `hsl(${progress}, 11%, 81%)`;
          });

          document.documentElement.setAttribute('data-direction', instance.direction)

        });

        scroll.on('call', (value, way, obj) => {
          if (value === 'dynamicBackground') {
            if(way === 'enter') {
              dynamicBackgrounds.push({
                id: obj.id,
                el: obj.el
              });
            } else {
              for (var i = 0; i < dynamicBackgrounds.length; i++) {
                if(obj.id === dynamicBackgrounds[i].id) {
                  dynamicBackgrounds.splice(i,1);
                }
              }
            }
          } else if (value === 'dynamicColor') {
            if(way === 'enter') {
              dynamicColorElements.push({
                id: obj.id,
                el: obj.el
              });
            } else {
              for (var i = 0; i < dynamicColorElements.length; i++) {
                if(obj.id === dynamicColorElements[i].id) {
                  dynamicColorElements.splice(i,1);
                }
              }
            }
          }
        });

      }, 1000)
    })
  }, [])
  return (
    <Layout hideOverflowY>
      <Seo title="About" />
      <div className={`flex flex-col items-center justify-around ${globalColours.bgDark}`}
           ref={scrollRef}>
        {about.map((data, i) =>
              <AboutSection key={i} lastPage={i === (about.length - 1)} i={i} data={data} />
              )}
      </div>
    </Layout>
  )
}
