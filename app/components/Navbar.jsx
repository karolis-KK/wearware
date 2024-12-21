"use client"

import { Inter, Questrial } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { PlusIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"

const inter = Inter({ subsets: ["latin"] })
const questrail = Questrial({
  subsets: ["latin"],
  weight: "400",
})

const jet = JetBrains_Mono({ subsets: ["latin"] })

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false)
  let links = [
    { name: "Idea", to: "ideaSection" },
    { name: "CTA", to: "ctaSection" },
    { name: "Contact", to: "contactSection" },
  ]

  const menuVariants = {
    hidden: {
      x: "-100%",
      borderRadius: "0 2rem 2rem 0",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      borderRadius: "0",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
  }

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        type: "tween",
        stiffness: 300,
        damping: 10,
      },
    }),
  }

  return (
    <nav className={`${props.font[0].className} fixed inset-x-4 top-4 z-50`}>
      <div className="h-16 justify-between flex items-center bg-black rounded-md max-w-6xl mx-auto">
        <h1 className={`text-2xl flex items-center ${inter.className} ml-4`}>
          <img src="logo.webp" className="w-14" alt="logo" />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {links.map((element, i) => (
            <Link
              to={element.to}
              smooth={true}
              duration={500}
              className={`uppercase text-neutral-100 hover:underline mx-4 ${jet.className} cursor-pointer`}
              key={i}
            >
              {element.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                type: "tween",
              },
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            <span className={`text-white uppercase mr-2 ${jet.className}`}>
              Menu
            </span>
            <motion.div
              className="relative size-6 flex items-center justify-center"
              animate={{ rotate: isOpen ? 45 : 0 }} // Spin when opening
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <PlusIcon
                className={`absolute inset-0 mix-blend-difference text-white`}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-center items-center overflow-hidden md:hidden"
          >
            {/* Add Close Button */}
            <motion.button
              className="absolute top-7 right-8 flex items-center"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              <span className={`text-black uppercase mr-2 ${jet.className}`}>
                Close
              </span>
              <div className="relative size-6 flex items-center justify-center">
                <PlusIcon className="absolute inset-0 rotate-45 text-black" />
              </div>
            </motion.button>

            <div className="flex-col text-4xl space-y-6 text-center">
              {links.map((element, index) => (
                <Link
                  to={element.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  key={element.name}
                  className={`block uppercase text-black hover:text-white hover:backdrop-invert ${jet.className}`}
                >
                  {element.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
