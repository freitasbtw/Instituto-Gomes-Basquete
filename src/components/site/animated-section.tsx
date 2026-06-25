"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({
  children,
  className,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.section>
  )
}
