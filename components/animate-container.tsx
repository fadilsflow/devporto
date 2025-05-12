'use client'

import { motion } from 'framer-motion'

export default function AnimatedContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    initial={{ y: 100, opacity: 0 }}   // mulai dari bawah (100px)
    animate={{ y: 0, opacity: 1 }}     // bergerak ke posisi normal
    exit={{ y: 100, opacity: 0 }}      // keluar ke bawah lagi (opsional)
    transition={{ duration: 0.5 }} 

    >
      {children}
    </motion.div>
  )
}
