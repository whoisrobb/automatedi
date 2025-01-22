"use client";

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const nav = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
]

const Navigation = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;

        if (Math.abs(difference) > 50) {
            setIsHidden(difference > 0);
        
            lastYRef.current = y;
        }
    });

  return (
    <motion.div
        className='fixed top-3 flex justify-center w-full z-[100]'
        animate={isHidden ? 'hidden' : 'visible'}
        variants={{
            hidden: { y: -100 },
            visible: { y: 0 }
        }}
    >
        <nav className='flex space-x-4 backdrop-blur-sm px-8 py-4 shadow rounded-full'>
            {nav.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className=''
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    </motion.div>
  )
}

export default Navigation;
