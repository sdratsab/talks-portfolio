import React from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 md:pt-0 px-6 md:px-12 lg:px-0 relative overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 lg:pl-12 xl:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-accent leading-none mb-2">
            talk's
            <br />
            portfolio
          </h1>
          
          <div className="mt-12 md:mt-24 font-sans text-sm text-muted max-w-md ml-1 md:ml-2">
            <p>_graphic design</p>
            <p>_digital art</p>
            <p>_photography</p>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative flex items-center justify-center mt-12 lg:mt-0">
        <motion.div
          className="relative w-full max-w-lg lg:max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <motion.img
            src="https://cdn.magicpatterns.com/uploads/9ZUsdnAu7bwL7tvNzyErcu/5dfd580f5eaea80936b346a0e248ce0f__1_-removebg-preview.png"
            alt="Talk's Portfolio Hero"
            className="w-full h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  )
}