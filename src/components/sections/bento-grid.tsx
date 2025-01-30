"use client"

import { motion } from "framer-motion"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Cpu, Shield, TrendingUp, Users, Wallet } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig
  

const items = [
  {
    title: "AI-Driven Analytics",
    description: "Real-time insights and predictive modeling.",
    className: "md:col-span-2",
    content: (
        <div className="mt-4">
            <h1 className="">Line Chart - Multiple</h1>
            <p className="text-muted-foreground text-sm">January - June 2024</p>
            <ChartContainer config={chartConfig}>
            <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                left: 12,
                right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
                />
                <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
                />
            </LineChart>
            </ChartContainer>
        <div>
            <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
                </div>
            </div>
            </div>
        </div>
    </div>
    ),
  },
  {
    title: "Fortified Security",
    description: "Quantum-grade protection systems.",
    className: "md:col-span-1",
    content: (
      <div className="relative mt-4 aspect-square">
        <div className="absolute inset-4">
          <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]">
            <Shield className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-green-500" />
          </div>
          <svg
            className="absolute inset-0 size-full animate-[spin_50s_linear_infinite] opacity-20"
            viewBox="0 0 100 100"
          >
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: "Decentralized Network",
    description: "Empower collaborative ecosystems.",
    className: "md:col-span-1",
    content: (
      <div className="relative mt-4 aspect-square">
        <div className="absolute inset-4">
          <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]">
            <Users className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-green-500" />
          </div>
          <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 size-1 rounded-full bg-green-500/50"
                style={{
                  transform: `rotate(${(i * 360) / 8}deg) translateY(-40px) rotate(${-(i * 360) / 8}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Intelligence",
    description: "Real-time insights and predictive analytics for better decisions",
    className: "md:col-span-2",
    content: (
    <div className="relative mt-4 max-h-96 aspect-square mx-auto">
        <div className="absolute inset-4">
            <div className="absolute inset-4 rounded-lg bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]">
                <Cpu className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-purple-500" />
            </div>
            <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute left-1/2 top-1/2 size-1 rounded-full bg-purple-500/50"
                        style={{
                            transform: `rotate(${(i * 360) / 12}deg) translateY(-50px) rotate(${-(i * 360) / 12}deg)`,
                        }}
                    />
                ))}
            </div>
        </div>
    </div>
    ),
  },
]

export function BentoGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Intelligent Solutions</h2>
        <p className="mx-auto max-w-2xl text-gray-400">
          Our cutting-edge technology empowers businesses and communities with smart, secure, and scalable solutions.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-xl bg-black/40 p-6 backdrop-blur-sm transition-all hover:bg-black/60 ${item.className}`}
          >
            <div className="relative z-10">
              <h3 className="mb-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              {item.content}
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.05),transparent_70%)]" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
