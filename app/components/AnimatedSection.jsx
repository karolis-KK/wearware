"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is in view
    triggerOnce: false, // Allow the animation to trigger multiple times
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    } else {
      setIsVisible(false) // Reset visibility when out of view
    }
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start off-screen
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate to visible
      transition={{ duration: 0.5 }} // Animation duration
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
