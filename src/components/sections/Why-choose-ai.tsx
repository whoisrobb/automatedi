"use client";

import { Lightbulb, Globe2, Users2, Lock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const whyChooseCards = [
  {
    title: "Innovation at Every Level",
    icon: Lightbulb,
    description: "From personal data security to large-scale industry solutions, our technologies redefine the future.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "AI Models", value: "50+" },
      { label: "Patents", value: "25+" },
      { label: "R&D Projects", value: "100+" }
    ]
  },
  {
    title: "Sustainability as Priority",
    icon: Globe2,
    description: "We integrate green technologies and promote energy efficiency in every solution we deliver.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Carbon Offset", value: "1000T" },
      { label: "Green Energy", value: "100%" },
      { label: "Recycling", value: "95%" }
    ]
  },
  {
    title: "Human-Centric Design",
    icon: Users2,
    description: "Our solutions prioritize usability, security, and transparency, ensuring people always come first.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "User Tests", value: "1000+" },
      { label: "NPS Score", value: "85+" },
      { label: "Success Rate", value: "99%" }
    ]
  },
  {
    title: "Future-Proof Systems",
    icon: Lock,
    description: "Leveraging blockchain, quantum cryptography, and AI for secure, scalable solutions.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Security Score", value: "A+" },
      { label: "Updates/Year", value: "52+" }
    ]
  },
];

export function WhyChooseAi() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating floating-delay-1" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">
            Why Choose{" "}
            <span className="text-gradient font-bold">Ai</span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our innovative solutions are transforming industries and empowering businesses worldwide.
          </p>
        </div>

        <div className="carousel-mask">
          <Carousel className="max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {whyChooseCards.map((card, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <div className="relative rounded-3xl overflow-hidden bg-card card-shine border shadow-xl">
                      <div className="aspect-[16/9] relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <card.icon className="w-8 h-8 mb-4" />
                          <h3 className="text-2xl font-medium mb-2">{card.title}</h3>
                          <p className="text-gray-200 text-sm">{card.description}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <div className="grid grid-cols-3 gap-4">
                          {card.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-xl font-bold text-primary">{stat.value}</div>
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}