import Tag from "./Tag"
import AnimatedSection from "./AnimatedSection"


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
            className={`${props.font[1].className} text-neutral-200 text-8xl lg:text-9xl mdlgw-[80rem]`}
          >
            Idea
          </h1>
        </div>
        <Tag page="Idea" bg="not" />
      </section>
    </AnimatedSection>
  )
}
