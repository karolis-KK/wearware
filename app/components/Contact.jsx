import { Inter } from 'next/font/google'
import { JetBrains_Mono} from 'next/font/google'
import Tag from "./Tag";
import AnimatedSection from "./AnimatedSection";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const jet = JetBrains_Mono({ subsets: ['latin'] })

export default function Contact(props) {
    return (
        <AnimatedSection>
            <section
                id="contactSection"
                className={`${props.font[0].className} flex flex-col h-screen relative`} style={{
                backgroundImage: "url('/bg4.webp')",
                backgroundSize: 'cover', // makes the image cover the entire element
                backgroundPosition: 'center', // centers the image
                }}>
                <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
                    <h1 className={`${jet.className} text-7xl text-neutral-200 lg:text-9xl lg:w-[80rem]`}>Contact</h1>
                </div>
                <Tag page="Contact" bg="not"/>
            </section>
        </AnimatedSection>
    )
}