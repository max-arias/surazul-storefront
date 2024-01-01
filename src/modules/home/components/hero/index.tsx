"use client"

import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"

const images = [
  "https://surazul-files.s3.sa-east-1.amazonaws.com/doll-1.png",
  "https://surazul-files.s3.sa-east-1.amazonaws.com/doll-2.png",
  "https://surazul-files.s3.sa-east-1.amazonaws.com/doll-3.png",
]

const Hero = () => {
  const [opacities, setOpacities] = React.useState<number[]>([])
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timeout, setTimeoutVal] = useState<NodeJS.Timeout>()

  const TIME_TO_NEXT_SLIDE = 5000

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let mouseOver = false
        function clearNextTimeout() {
          timeout && clearTimeout(timeout)
        }
        function nextTimeout() {
          clearNextTimeout()

          if (mouseOver) return

          const tm = setTimeout(() => {
            slider.next()
          }, TIME_TO_NEXT_SLIDE)

          setTimeoutVal(tm)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className="h-[75vh] w-full relative">
      <div ref={sliderRef} className="fader h-full relative overflow-hidden">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="fader__slide w-full h-full absolute top-0 transition-opacity duration-500 ease-in"
            style={{ opacity: opacities[idx] }}
          >
            {/* TODO: next/image */}
            <img
              src={src}
              className="bg-transparent w-full h-full object-cover absolute"
            />
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="absolute left-6 bottom-6 prose">
          <h2 className="text-white mb-1 drop-shadow">Hello world</h2>
          <h3 className="text-white mb-1 drop-shadow">Lorem ipsum</h3>

          <div className="dots flex pt-3 justify-start gap-2 left-0">
            {Array.from(
              {
                length: instanceRef.current?.track?.details?.slides.length || 0,
              },
              (_, i) => i
            ).map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    timeout && clearTimeout(timeout)
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={
                    "dot shadow-md border-none size-2 rounded-circle p-2 cursor-pointer focus:outline-none focus-visible:bg-primary" +
                    (currentSlide === idx ? " active bg-gray-400" : " bg-white")
                  }
                ></button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
