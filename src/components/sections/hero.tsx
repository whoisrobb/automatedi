"use client";

import React from 'react';
import { TextAnimate } from '../ui/text-animate';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative h-[90vh] grid place-items-center text-center rounded-lg'>
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
            >
                Connecting, Interacting,
                <br />
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.5,
                    delay: 1,
                    type: "spring",
                    stiffness: 100,
                    }}
                    className="bg-gradient-to-r from-muted-foreground to-muted-foreground/50 bg-clip-text text-transparent"
                >
                    Distributing with Intelligence
                </motion.span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mb-12 max-w-3xl text-lg text-gray-300"
            >
                At Automated Intelligence (Ai), we are revolutionizing how people, communities, businesses, and industries
                connect, interact, and distribute resources in a digital-first world.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
                <Button size="lg" className="group min-w-[200px]">
                    Transform with Us <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                    Learn More
                </Button>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Hero
