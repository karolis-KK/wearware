import Tag from "./Tag"
import AnimatedSection from "./AnimatedSection"

export default function Landing(props) {
  return (
    <AnimatedSection>
      <section
        id="introSection"
        className={`${props.font[0].className} flex flex-col h-screen relative`}
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
          <h1
            className={`${props.font[1].className} hidden lg:block text-neutral-100 text-7xl tracking-tighter lg:text-9xl mdlg:w-[80rem]`}
          >
            Introducing Wearware AI
          </h1>
          <h1
            className={`${props.font[1].className} lg:hidden text-neutral-100 text-7_5xl tracking-tighter lg:text-9xl mdlg:w-[80rem]`}
          >
            Intro/ ducing Wearware AI
          </h1>
        </div>
        <Tag page="" bg="not" />
      </section>
    </AnimatedSection>
  )
}
