import AnimatedSection from "./AnimatedSection"
import Tag from "./Tag"
import { TypingAnimation } from "./typing-animation"
export default function CTA(props) {
  return (
    <AnimatedSection>
      <section className={`${props.font[1].className} cta flex flex-col lg:flex-row lg:h-screen relative bg-white`}>
        <div className="mt-14 ml-4 lg:ml-24 lg:w-1/2">
          <h1 className={`${props.font[0].className} text-4xl text-black `}>
            Calls to Action
          </h1>
          <h1
            className={`${props.font[1].className} lg:text-3xl mt-4 text-neutral-500 w-[22rem] lg:w-[28rem]`}
          >
            We’re seeking visionary partners to help us bring Wearware to life
            and scale its impact
          </h1>
        </div>
        <div className="lg:w-3/5 flex-col lg:flex-row flex lg:px-0 px-2 pt-[2rem] pb-[7rem] lg:py-[5rem] lg:pr-[5rem]">
          <div className="lg:h-full bg-neutral-200 lg:mr-2 pt-4 lg:pt-0 flex flex-col justify-between pb-4 rounded-lg lg:w-1/2">
            <p
              className={`${props.font[1].className} text-2xl lg:mt-[20rem] lg:w-[20rem] ml-4 text-neutral-500`}
            >
              to accelerate development, expand platform integrations, and
              enhance AI capabilities
            </p>
            <TypingAnimation
              className={`${props.font[0].className} text-4xl lg:text-6xl ml-4 text-white`}
            >
              funding
            </TypingAnimation>
          </div>
          <div className="lg:h-full mt-4 lg:mt-0 flex flex-col pt-4 lg:pt-0 rounded-lg bg-neutral-200 lg:bg-transparent lg:w-3/5">
            <div className="h-1/2 lg:bg-neutral-200 lg:w-full rounded-lg flex flex-col pb-4 justify-between">
              <p
                className={`${props.font[1].className} text-2xl lg:w-[20rem] lg:mt-[5rem] ml-4 text-neutral-500`}
              >
                collaborations with resale platforms, sustainable fashion
                brands, and influencers to grow our reach
              </p>
              <TypingAnimation
                className={`${props.font[0].className} text-4xl lg:text-6xl ml-4 text-white`}
              >
                partnerships
              </TypingAnimation>
            </div>
            <div className="h-1/2 lg:bg-neutral-200 lg:w-full rounded-lg lg:mt-2 flex pb-4 flex-col justify-between">
              <p
                className={`${props.font[1].className} text-2xl lg:w-[20rem] lg:mt-[5rem] ml-4 text-neutral-500`}
              >
                early adopters, beta testers, and advocates to help refine the
                user experience and spread the word about Wearware’s mission
              </p>
              <TypingAnimation
                className={`${props.font[0].className} text-4xl lg:text-6xl ml-4 text-white`}
              >
                support
              </TypingAnimation>
            </div>
          </div>
        </div>

        <Tag page="CTA" bg="yes" />
      </section>
    </AnimatedSection>
  );
}
