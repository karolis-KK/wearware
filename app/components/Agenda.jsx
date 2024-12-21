import { Inter } from 'next/font/google'
import { JetBrains_Mono} from 'next/font/google'
import Tag from "./Tag";
import AnimatedSection from "./AnimatedSection";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const jet = JetBrains_Mono({ subsets: ['latin'] })

export default function Agenda(props) {
    return (
        <AnimatedSection>
            <section className={`${props.font[0].className} flex flex-col bg-white h-screen relative`}>
                <h1 className={`${jet.className} lg:text-8xl text-6xl ml-10 mt-14 lg:ml-14 text-black`}>Agenda</h1>
                <div className={`${inter.className} grow flex lg:justify-end justify-center items-center flex-row`}>
                    <div className='lg:w-1/2 lg:px-24 w-full px-12 -mt-32'>
                        <div className='flex justify-between text-2xl'>
                            <h1 className='text-black'>Introduction</h1>
                            <h1 className='text-black'>Part 1</h1>
                        </div>
                        <hr className='h-[2px] my-4 w-full bg-black'/>
                        <div className='flex mb-4 justify-between'>
                            <h1 className='text-neutral-600'>Idea</h1>
                            <h1 className='text-neutral-600'>01</h1>
                        </div>
                        <div className='flex mt-4 justify-between'>
                            <h1 className='text-neutral-600'>Design</h1>
                            <h1 className='text-neutral-600'>02</h1>
                        </div>
                        <div className='flex mt-8 justify-between text-2xl'>
                            <h1 className='text-black'>Strategy</h1>
                            <h1 className='text-black'>Part 2</h1>
                        </div>
                        <hr className='h-[2px] my-4 w-full bg-black'/>
                        <div className='flex mt-4 justify-between'>
                            <h1 className='text-neutral-600'>Call to Action</h1>
                            <h1 className='text-neutral-600'>03</h1>
                        </div>
                    </div>
                </div>
                <Tag page="Agenda" bg="yes"/>
            </section>
        </AnimatedSection>
    )
}