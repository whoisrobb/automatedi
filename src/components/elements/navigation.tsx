"use client";

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';

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
        className='fixed top-3 flex items-center justify-center w-full z-[100]'
        animate={isHidden ? 'hidden' : 'visible'}
        variants={{
            hidden: { y: -100 },
            visible: { y: 0 }
        }}
    >
        <nav className='flex items-center space-x-4 bg-foreground text-background px-8 py-2 shadow rounded-full'>
            <Link href='#' className=''>
                <Image
                    src='/ai.png'
                    alt='Logo'
                    width={100}
                    height={100}
                />
            </Link>
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
