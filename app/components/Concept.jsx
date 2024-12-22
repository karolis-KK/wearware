import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import Tag from "./Tag"
import Iphone15ProDemo from "../components/Iphone"
import Feature from "../components/Feature"
import AnimatedSection from "./AnimatedSection"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })
const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function Concept(props) {
  return (
    <AnimatedSection>
      <section className={`${props.font[0].className} flex flex-col mdlg:flex-row mdlg:h-screen relative bg-white`}>
        <div className="mt-14 ml-10 mdlg:ml-24">
          <h1 className={`${props.font[1].className} text-4xl text-black `}>
            Wearware AI
          </h1>
          <h1
            className={`${props.font[1].className} text-4xl mt-4 text-neutral-500 w-[17rem]`}
          >
            Concept A
          </h1>
          <div
            className={`mdlg:w-[26rem] md:w-[40rem] mt-12 mdlg:mt-24 mdlg:scale-105 text-black font-medium text-xl w-[19rem] mdlg:text-2xl ${props.font[0].className} tracking-tight`}
          >
            wearware is a ai-driven platform revolutionizing the way users shop
            for pre-owned clothing. Our app helps users find exactly what
            they're looking for—whether it's a specific brand, collection, or
            unique item—by leveraging advanced artificial intelligence to search
            across a vast array of second-hand clothing resale platforms.
          </div>
        </div>
        <div className="relative scale-90 md:mx-[10rem] ph:mx-[15rem]">
          <Iphone15ProDemo />
        </div>
        <div className="mt-14 mb-24 mdlg:mb-0 items-center mdlg:items-start flex flex-col gap-y-24 justify-center">
          <Feature
            title="Visual Search"
            font={[inter, jet]}
            description="Upload a photo, and our AI finds exact matches across second-hand reselling sites"
          />
          <Feature
            title="One-Stop Comparison"
            font={[inter, jet]}
            description="View listings from multiple platforms to compare prices and sizes instantly"
          />
          <Feature
            title="Shop Sustainably"
            font={[inter, jet]}
            description="Easily find pre-loved items and make eco-friendly fashion choices"
          />
        </div>
        <Tag page=" " bg="yes" />
      </section>
    </AnimatedSection>
  );
}
