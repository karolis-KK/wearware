"use client"

import Tag from "./Tag"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import AnimatedSection from "./AnimatedSection"
import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Form(props) {
  const [popupOpen, setPopupOpen] = useState(false)

  function submitLetter(e) {
    e.preventDefault()
    const email = document.getElementById("email").value
    console.log(email)
    document.getElementById("email").value = ""
    setPopupOpen(true)
  }
  return (
    <AnimatedSection>
      <section className="flex flex-col bg-white h-screen relative">
        {popupOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-black p-8 mx-4 lg:mx-0">
              <h2 className={`text-2xl ${props.font[1].className} text-white mb-4`}>Thank you for subscribing!</h2>
              <button
                onClick={() => setPopupOpen(false)}
                className={`${props.font[1].className} text-white flex items-center`}
              >
                Close <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        )}
        <h1
          className={`${props.font[1].className} text-6xl ml-[1rem] lg:text-8xl mt-14 lg:ml-14 text-black`}
        >
          Contact
        </h1>
        <div
          className={`${props.font[0].className} grow flex justify-center items-center flex-row`}
        >
          <div className="lg:w-[50rem] lg:px-24 -mt-32">
            <div className="flex justify-between text-2xl">
              <h1 className="text-black">
                Join our{" "}
                <span className={`${props.font[1].className} underline`}>newsletter</span>
              </h1>
              <ArrowLongRightIcon className="size-8 text-black" />
            </div>
            <hr className="h-[2px] my-4 w-full bg-black" />
            <form className="flex">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={`lg:w-1/2 h-12 px-4 ${props.font[1].className} bg-black placeholder-white text-white ring-0 border-0 outline-0 focus:ring-0 focus:border-0 focus:outline-0`}
              />
              <button
                onClick={submitLetter}
                type="submit"
                className={`${props.font[1].className} ml-4`}
              >
                ENTER
              </button>
            </form>
            <h1 className={`flex items-center ${props.font[0].className} mt-8`}>
              contact us on{" "}
              <Link
                className={`bg-black ml-2 px-2 py-1.5 text-white ${props.font[1].className}`}
                target="_blank"
                href="https://www.instagram.com/wearware.ai/"
              >
                instagram
              </Link>{" "}
            </h1>
          </div>
        </div>
        <Tag page="Contact" bg="yes" />
      </section>
    </AnimatedSection>
  )
}
