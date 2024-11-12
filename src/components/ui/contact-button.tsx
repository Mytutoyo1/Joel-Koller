"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="inline-block" 
        onClick={() => window.location.href = '/contact'} // NICHT VERGESSEN LINK ZU àNDERN
      >
        Contact Me
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="inline-block ml-2"
      >
        →
      </motion.span>
    </motion.button>
  )
}