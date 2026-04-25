import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'work', label: 'work' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' },
]

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop & Mobile Navigation */}
      <motion.nav
        className={`
          fixed md:sticky top-0 left-0 h-screen w-full md:w-64 lg:w-80 
          bg-background md:bg-transparent z-40
          flex flex-col justify-center px-12 md:px-16 lg:px-24
          transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                group flex items-center text-left font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter
                transition-colors duration-300
                ${activeSection === item.id ? 'text-accent' : 'text-foreground hover:text-accent'}
              `}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            >
              <span className="mr-2 opacity-50 group-hover:opacity-100 transition-opacity">_</span>
              {item.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="absolute bottom-12 left-12 md:left-16 lg:left-24 text-muted font-sans text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>EST. 2026</p>
          <p className="mt-1">INDEPENDENT</p>
        </motion.div>
      </motion.nav>
    </>
  )
}