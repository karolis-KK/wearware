import { TypingAnimation } from "./typing-animation"

export default function Feature(props) {
  return (
    <div className={props.font[0].className}>
      <TypingAnimation className={`text-2xl font-medium ${props.font[1].className}`}>
        {props.title}
      </TypingAnimation>
      <p className="text-[#525252] w-72">{props.description}</p>
    </div>
  )
}
