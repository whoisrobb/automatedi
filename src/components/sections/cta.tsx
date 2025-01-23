'use client'

import { ArrowRight, Info, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRef } from 'react'

export default function CTASection() {
    const contactRef = useRef<HTMLDivElement>(null);

  return (
    <section
        className="relative min-h-[80vh] w-full overflow-hidden"
        ref={contactRef}
        id='contact'
    >
      {/* Background Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.35]" 
            style={{
                backgroundImage: 'linear-gradient(90deg, rgb(var(--foreground) / 0.1) 1px, transparent 0), linear-gradient(rgb(var(--foreground) / 0.1) 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }}
        />

        {/* Content Container */}
        <div className="container relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-4 py-20">
            {/* Main Content */}
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
                >
                    Shape the Future with Us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    Join our mission to drive innovation, sustainability, and progress. Whether you're looking to partner with us, explore opportunities, or learn how we can empower your vision, we're here to create something extraordinary together.
                </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
                <Button
                    size="lg"
                    className="group relative overflow-hidden text-white transition-all"
                >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/0 via-purple-400/10 to-purple-600/0 opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 transition-all hover:bg-purple-50"
                >
                    Learn More
                    <Info className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 transition-all"
                >
                    Join Our Team
                    <UserPlus className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
            </motion.div>

            {/* Abstract Shape */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[url('https://sjc.microlink.io/d5R4ajuKc49RsB75fWCpJNWiitmbEJ1A4V33dQUCAP7AIGkV5ccGTay82P4fyJd41sv6dSGgVUKwJGkEjwfHUQ.jpeg')] bg-cover bg-center opacity-[0.03]" />
        </div>
    </section>
  )
}