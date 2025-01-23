import { Circle, Square, Triangle } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'

export const FloatingCircle = () => (
    <div className="absolute top-20 left-10 animate-float-slow">
        <Circle className="w-6 h-6 text-red-300" />
    </div>
)

export const FloatingSquare = () => (
    <div className="absolute top-40 right-20 animate-float-slower">
        <Square className="w-8 h-8 text-orange-300 rotate-45" />
    </div>
)

export const FloatingTriangle = () => (
    <div className="absolute bottom-40 left-1/4 animate-float">
        <Triangle className="w-10 h-10 text-red-400" />
    </div>
)


export function FloatingCard({ className, children }: { className: string; children: React.ReactNode }) {
    return (
      <div className={`absolute ${className}`}>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
          {children}
        </div>
      </div>
    );
}

export function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
            <CardContent className="p-5">
                <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
                <div className="text-gray-600">{label}</div>
            </CardContent>
        </Card>
    );
}