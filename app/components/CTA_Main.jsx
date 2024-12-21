import AnimatedSection from "./AnimatedSection";
import Tag from "./Tag"

export default function CTA_Main(props) {
  return (
    <AnimatedSection>
      <section
        id="ctaSection"
        className="flex flex-col h-screen relative"
        style={{
          backgroundImage: "url('/bg3.webp')",
          backgroundSize: "cover", // makes the image cover the entire element
          backgroundPosition: "center", // centers the image
        }}
      >
        <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
          <h1
            className={`${props.font[1].className} text-neutral-200 text-8xl lg:text-9xl lg:w-[40rem]`}
          >
            Calls to Action
          </h1>
        </div>
        <Tag page="CTA" bg="not" />
      </section>
    </AnimatedSection>
  )
}
