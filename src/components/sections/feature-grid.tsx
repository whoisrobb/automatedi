"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { 
    Code2, Layers, Workflow
} from "lucide-react";

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[
            { icon: Code2, title: "Advanced Tech", desc: "Cutting-edge solutions" },
            { icon: Workflow, title: "Seamless Flow", desc: "Optimized processes" },
            { icon: Layers, title: "Scalable", desc: "Growth-ready systems" },
        ].map((feature, i) => (
            <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center gap-2 group relative"
                whileHover={{ scale: 1.05 }}
            >
                <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 relative">
                    <feature.icon className="w-6 h-6 text-primary relative z-10" />
                    <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{feature.desc}</p>
            </motion.div>
        ))}
    </div>
  )
}

export default FeatureGrid;
