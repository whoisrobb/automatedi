'use client'

import { motion } from 'framer-motion'
import { Network, Factory, Users, Building2, MessageSquare, Shield, Zap, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

const connectingPoints = [
  {
    title: 'Autonomous Communities',
    description:
      'Enable real-time communication, optimized resource sharing, and seamless integration of public services.',
    icon: Building2,
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'Industry 4.0',
    description:
      'Enhance collaboration between sectors through data-driven insights and intelligent automation.',
    icon: Factory,
    color: 'from-green-500/20 to-green-600/20',
  },
  {
    title: 'People-First Design',
    description:
      'Ensure individuals remain at the center of every solution, benefiting from secure, intuitive, and human-centric systems.',
    icon: Users,
    color: 'from-purple-500/20 to-purple-600/20',
  },
]

const philosophyPoints = [
  {
    title: 'Connecting Communities',
    description: 'Build networks that bridge gaps and create opportunities for collaboration.',
    icon: Network,
  },
  {
    title: 'Interacting with Purpose',
    description: 'Develop technology solutions that integrate seamlessly into everyday life.',
    icon: Zap,
  },
  {
    title: 'Distributing Resources',
    description: 'Ensure equitable access to data, energy, and technology for sustainable growth.',
    icon: Share,
  },
]

export function About() {
  return (
    <section className="relative overflow-hidden">

      {/* Connecting People Section */}
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-4xl">
                Connecting People with Communities and Industries
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
                At the heart of our mission is connection. Ai creates bridges between individuals, communities, and
                industries, fostering collaboration, efficiency, and innovation.
            </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {connectingPoints.map((point) => (
            <Card
                key={point.title}
            >
                <CardHeader>
                    <h3 className="mb-4 text-xl font-semibold">
                        {point.title}
                    </h3>
                </CardHeader>
                <CardContent>
                    <p className="mb-6 text-muted-foreground">{point.description}</p>
                </CardContent>
                <CardFooter>
                    <Button
                        variant="ghost"
                        className=""
                    >
                        Learn more
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 size-96 animate-blob rounded-full blur-3xl" />
        <div className="absolute right-1/4 top-1/2 size-96 animate-blob animation-delay-2000 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 size-96 animate-blob animation-delay-4000 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
