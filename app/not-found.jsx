import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import Tag from "./components/Tag"
import Link from 'next/link'
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] })
const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function NotFound() {
  return (
    <section
      className="flex flex-col h-screen relative">
      <div className="mt-[16rem] ml-[1rem] lg:ml-[5rem]">
        <h1
          className={`${jet.className} text-black text-7xl tracking-tighter lg:text-9xl lg:w-[80rem]`}
        >
          404/ Page Not Found
        </h1>
      </div>
      <div
      className={`${inter.className} flex items-center absolute bottom-12 left-12 lg:left-24 text-lg`}
    >
      <Link className={`bg-black flex items-center text-white ${jet.className} px-2 py-1.5`} href="/">HOME 
      <ArrowLongRightIcon className="h-6 w-6 ml-4 text-white" /></Link>
    </div>
    </section>
  )
}