"use client";

import React from 'react';
import { TextAnimate } from '../ui/text-animate';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className='relative h-[90vh] grid place-items-center text-center rounded-lg'>
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        
        <div className="lg:max-w-[70rem] grid gap-4 place-items-center">
            <TextAnimate
                animation="slideUp"
                by="word"
                className='lg:text-6xl md:text-4xl text-lg font-bold'
            >
                Connecting, Interacting, Distributing with Intelligence
            </TextAnimate>

            
            <TextAnimate
                animation="fadeIn"
                by="word"
                delay={2}
                duration={0.5}
                className='lg:max-w-[50rem]'
            >
                At Automated Intelligence (Ai), we are revolutionizing how people, communities, businesses,
                and industries connect, interact, and distribute resources in a digital-first world. By integrating
                cutting-edge technology solutions, we empower individuals, enhance businesses, and
                enable sustainable, intelligent communities.
            </TextAnimate>
        
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 group relative overflow-hidden">
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                    Learn More
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Hero
