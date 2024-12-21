import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import Tag from "./Tag"
import AnimatedSection from "./AnimatedSection"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })
const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function Idea(props) {
  return (
    <AnimatedSection>
      <section
        id="ideaSection"
        className={`flex flex-col h-screen relative ${props.font[0].className}`}
        style={{
          backgroundImage: "url('/bg2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
          <h1
            className={`${jet.className} text-neutral-200 text-8xl lg:text-9xl lg:w-[80rem]`}
          >
            Idea
          </h1>
        </div>
        <Tag page="Idea" bg="not" />
      </section>
    </AnimatedSection>
  )
}
