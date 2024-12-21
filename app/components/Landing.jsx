import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import Tag from "./Tag"
import AnimatedSection from "./AnimatedSection"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })
const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function Landing() {
  return (
    <AnimatedSection>
      <section
        className="flex flex-col h-screen relative"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
          <h1
            className={`${jet.className} hidden lg:block text-neutral-100 text-7xl tracking-tighter lg:text-9xl lg:w-[80rem]`}
          >
            Introducing Wearware AI
          </h1>
          <h1
            className={`${jet.className} lg:hidden text-neutral-100 text-7_5xl tracking-tighter lg:text-9xl lg:w-[80rem]`}
          >
            Intro/ ducing Wearware AI
          </h1>
        </div>
        <Tag page="" bg="not" />
      </section>
    </AnimatedSection>
  )
}
