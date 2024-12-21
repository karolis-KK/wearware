import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import Tag from "./Tag"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import AnimatedSection from "./AnimatedSection"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })
const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function Form(props) {
  return (
    <AnimatedSection>
      <section className="flex flex-col bg-white h-screen relative">
        <h1
          className={`${jet.className} text-6xl ml-[1rem] lg:text-8xl mt-14 lg:ml-14 text-black`}
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
                <span className={`${jet.className} underline`}>newsletter</span>
              </h1>
              <ArrowLongRightIcon className="size-8 text-black" />
            </div>
            <hr className="h-[2px] my-4 w-full bg-black" />
            <div className="flex">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={`lg:w-1/2 h-12 px-4 ${jet.className} bg-black placeholder-white text-white ring-0 border-0 outline-0 focus:ring-0 focus:border-0 focus:outline-0`}
              />
              <button type="submit" className={`${jet.className} ml-4`}>ENTER</button>
            </div>
            <h1 className={`flex items-center ${inter.className} mt-8`}>
              contact us on{" "}
              <Link
                className={`bg-black ml-2 px-2 py-1.5 text-white ${jet.className}`}
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
  );
}
