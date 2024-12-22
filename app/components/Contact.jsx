import Tag from "./Tag";
import AnimatedSection from "./AnimatedSection";

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
                    <h1 className={`${props.font[1].className} text-7xl text-neutral-200 lg:text-9xl mdlg:w-[80rem]`}>Contact</h1>
                </div>
                <Tag page="Contact" bg="not"/>
            </section>
        </AnimatedSection>
    )
}