"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Megaphone } from 'lucide-react'
import { Badge } from './ui/badge'

const services = [
    {
        title: "Content Creation",
        description: "Short-form video, UGC, reels, and visuals designed to stop the scroll and spark engagement.",
        video: "/videos/vid6.mp4",
    },
    {
        title: "Social Management",
        description: "We handle your content calendar, posting, and day-to-day management of your socials.",
        video: "/videos/vid4.mp4",
    },
    {
        title: "Paid Media",
        description: "We build and manage targeted ad campaigns that turn attention into results and help you scale.",
        video: "/videos/vid5.mp4",
    }
]

const Services = () => {
    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 mb-20">
                    <Badge className="px-4 py-1 bg-black/5 rounded-lg text-xs font-semibold uppercase tracking-wider text-black/60">
                        Services
                    </Badge>
                    <h2 className="text-5xl lg:text-7xl font-medium tracking-[-0.04em] text-black">
                        How I can <br />
                        help you <span className="italic font-serif">grooow</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[var(--brand-dark)] backdrop-blur-sm rounded-[2.5rem] p-10 flex flex-col gap-10 transition-colors group border border-white/20"
                        >
                            <div className="aspect-square relative w-full flex items-center justify-center p-6">
                                {service.video ? (
                                    <div className="relative w-full h-full">
                                        <video src={service.video} className="w-full h-full" />
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-orange-100 rounded-3xl flex items-center justify-center">
                                        <Megaphone className="w-24 h-24 text-orange-500 stroke-[1.5]" />
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl font-medium tracking-tight text-black">{service.title}</h3>
                                <p className="text-lg text-black/60 leading-relaxed font-sans">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
