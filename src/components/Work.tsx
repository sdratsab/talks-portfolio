import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// We still generate the maximum 23 slots, but the site will automatically hide any that don't have a real image file.
const projects = [
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `digital-${i + 1}`,
    title: `Digital Art ${i + 1}`,
    category: 'Digital Art',
    year: '2026',
    image: `/digital${i + 1}.jpg`, 
  })),
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `photo-${i + 1}`,
    title: `Photography ${i + 1}`,
    category: 'Photography',
    year: '2025',
    image: `/photo${i + 1}.jpg`,
  })),
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: `design-${i + 1}`,
    title: `Graphic Design ${i + 1}`,
    category: 'Graphic Design',
    year: '2026',
    image: `/design${i + 1}.jpg`,
  }))
]

const categories = ['All', 'Digital Art', 'Photography', 'Graphic Design']

export function Work() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  
  // This new state keeps a list of any images that failed to load
  const [failedImages, setFailedImages] = useState<string[]>([])

  // Filter out any projects that are in the "failed" list, plus handle the category tabs
  const filteredProjects = projects.filter(
    project => 
      (activeCategory === 'All' || project.category === activeCategory) && 
      !failedImages.includes(project.id)
  )

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
          <span className="text-accent">_</span>selected_works
        </h2>
        <p className="font-sans text-muted max-w-xl mb-8">
          A curated collection of selected works spanning digital art, photography, and graphic design.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-mono text-sm tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === category 
                  ? 'border-accent text-accent bg-accent/10' 
                  : 'border-foreground/20 text-muted hover:border-foreground/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              key={project.id}
              className="relative group cursor-pointer overflow-hidden bg-muted/10 h-full w-full"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // If the .jpg fails, try the .png. If the .png fails, tell the app to delete the slot.
                  if (target.src.includes('.jpg')) {
                    target.src = target.src.replace('.jpg', '.png');
                  } else {
                    setFailedImages(prev => [...prev, project.id]);
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-sans text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center font-sans text-xs text-muted">
                  <span className="uppercase tracking-wider">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 p-2 text-foreground hover:text-accent transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div
              className="w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row gap-8 overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <div className="w-full md:w-2/3">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-contain bg-muted/10"
                />
              </div>
              <div className="w-full md:w-1/3 flex flex-col justify-center py-8">
                <h3 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
                  <span className="text-accent">_</span>
                  {selectedProject.title}
                </h3>
                <div className="space-y-2 font-sans text-sm text-muted mb-8">
                  <p>CATEGORY: {selectedProject.category}</p>
                  <p>YEAR: {selectedProject.year}</p>
                </div>
                <p className="font-sans text-foreground/80 leading-relaxed">
                  A deeper look into this piece, exploring the visual narrative and technical execution required for the final output.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}