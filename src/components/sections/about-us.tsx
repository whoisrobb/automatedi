"use client";

import { Target, Trophy } from 'lucide-react'
import React, { useRef } from 'react'
import { FloatingCard, StatCard } from '../elements/floating-elements';

const AboutUs = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
  return (
    <div
        ref={aboutRef}
        id='about'
    >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
            <div className="relative">

                <h1 className="text-6xl lg:text-7xl font-bold text-center mb-8 tracking-tight">
                    About <span className="text-gradient">Us</span>
                </h1>

                <div className="relative">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
                        We're a team driven by innovation, sustainability, and collaboration, committed to solving global challenges with cutting-edge technology. Our journey started in 1970, and since then, we've grown into an industry leader with a global presence, helping businesses, governments, and communities thrive.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
