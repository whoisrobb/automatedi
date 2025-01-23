import { ArrowUpRight, Brain, ChevronRight, Cpu, Globe2, Shield, Users, Zap } from 'lucide-react'
import React from 'react';
import { Card, CardContent } from '../ui/card';
import AboutUs from './about-us';
import { StatCard } from '../elements/floating-elements';

const stats = [
    { label: "Active Users", value: "2M+", icon: <Users className="w-4 h-4" /> },
    { label: "Countries", value: "50+", icon: <Globe2 className="w-4 h-4" /> },
    { label: "Processing Power", value: "10PB", icon: <Zap className="w-4 h-4" /> },
];

const About = () => {
  return (
    <div className="mt-48 space-y-24">
    <AboutUs />

    <div className="flex items-start justify-center">
        <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
                To empower individuals, businesses, and communities by integrating cutting-edge technology
                solutions, fostering collaboration, and promoting sustainable development.
            </p>
        </div>

        <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 rounded-3xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden group hover:border-primary/20 transition-all duration-300">
                <div className="p-6">
                    <Users className="w-10 h-10 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-4">Connecting People with Communities and Industries</h3>
                    <ul className="space-y-3">
                        {["Autonomous Communities", "Industry 4.0", "People-First Design"].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 group/item">
                                <ChevronRight className="w-4 h-4 text-primary/60 group-hover/item:translate-x-1 transition-transform" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>


    {/* <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
        {stats.map((stat, index) => (
            <div
                key={index}
                className="group relative bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    <div className="relative flex items-center gap-2 text-primary/70 mb-2">
                        {stat.icon}
                        <span className="text-sm">{stat.label}</span>
                    </div>
                <p className="relative text-2xl font-bold">{stat.value}</p>
            </div>
        ))}
    </div> */}
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        <StatCard number="50+" label="Countries" />
        <StatCard number="1K+" label="Projects" />
        <StatCard number="500+" label="Clients" />
        <StatCard number="98%" label="Satisfaction" />
    </div>

    <div className="mb-16">
        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Interacting Through Technology</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                We redefine interactions by integrating ambient, ubiquitous, and intelligent technologies.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {[
                { icon: <Cpu />, title: "Ambient Computing" },
                { icon: <Brain />, title: "AI-Driven Platforms" },
                { icon: <Shield />, title: "Secure Interactions" }
            ].map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
                    <CardContent className="p-5">
                        <div className="relative mb-4 inline-block">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur group-hover:blur-xl transition-all" />
                            <div className="relative p-2">
                                {React.cloneElement(item.icon, { className: "w-8 h-8 text-primary transform group-hover:scale-110 transition-transform" })}
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <div className="h-1 w-12 bg-primary/20 rounded-full transform origin-left group-hover:scale-x-150 transition-transform" />
                    </CardContent>
                </Card>
            ))}
        </div>
        
    </div>
    </div>
  )
}

export default About
