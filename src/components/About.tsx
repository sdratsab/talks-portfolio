import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <motion.div
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-2">
            <span className="text-accent">_</span>about_talk
          </h2>
          <p className="font-sans text-sm text-accent tracking-widest uppercase mb-16 ml-8">
            (Not currently taking commissions)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans text-sm font-bold text-foreground mb-6 border-b border-foreground/10 pb-4">
                DISCIPLINES
              </h3>
              <ul className="font-sans text-base text-muted space-y-4">
                <li>Graphic Design</li>
                <li>Digital Art & Illustration</li>
                <li>Photography</li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-bold text-foreground mb-6 border-b border-foreground/10 pb-4">
                TOOLKIT
              </h3>
              <ul className="font-sans text-base text-muted space-y-4">
                <li>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto bg-muted/10 p-4 flex items-center justify-center">
            <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 -z-10"></div>
            <div className="absolute bottom-8 -left-8 bg-background p-4 border border-foreground/10 shadow-xl hidden md:block">
              <p className="font-sans text-xs text-muted tracking-widest">
                STUDIO_26
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}