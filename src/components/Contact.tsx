import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="text-accent">_</span>contact
          </h2>

          <p className="font-sans text-lg text-foreground/80 mb-16 max-w-md">
            Reach out for inquiries, commissions, or just to connect.
          </p>

          <div className="space-y-12">
            {/* Twitter */}
            <motion.a
              href="https://twitter.com/ravebih"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-foreground/10 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">
                  TWITTER / X
                </p>
                <p className="font-sans text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  @ravebih
                </p>
              </div>
              <ArrowRight size={28} className="text-muted group-hover:text-accent group-hover:translate-x-2 transition-all" />
            </motion.a>

            {/* Discord */}
            <motion.a
              href="#"
              className="group flex items-center justify-between border-b border-foreground/10 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">
                  DISCORD
                </p>
                <p className="font-sans text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  _drainer
                </p>
              </div>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@countingjapanese"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-foreground/10 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">
                  TIKTOK
                </p>
                <p className="font-sans text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                  @countingjapanese
                </p>
              </div>
              <ArrowRight size={28} className="text-muted group-hover:text-accent group-hover:translate-x-2 transition-all" />
            </motion.a>
          </div>

          <motion.p
            className="mt-24 font-sans text-xs text-muted/50 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © 2026 TALK — ALL RIGHTS RESERVED
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}