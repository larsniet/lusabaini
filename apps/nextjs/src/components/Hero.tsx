"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Instagram, Music2, Send, Share2, MoreHorizontal, Asterisk } from "lucide-react"
import StoryMockup from "./StoryMockup"
import { motion } from "motion/react"

const TikTokIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52V6.69z" />
    </svg>
)

const XIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const ThreadsIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4v2a6 6 0 1 1 0-12 6 6 0 0 1 0 12v-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
)

const LinkedInIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.55 12c.91 0 1.65.74 1.65 1.65 0 .22-.05.42-.13.62l.13.13c2.45 0 4.43-1.98 4.43-4.43 0-2.45-1.98-4.43-4.43-4.43-2.45 0-4.43 1.98-4.43 4.43 0 .22.02.44.05.65l.13-.13c.2-.08.4-.13.62-.13.91 0 1.65.74 1.65 1.65z" />
    </svg>
)

const socialIcons = [
    <TikTokIcon key="tiktok" />,
    <Instagram key="insta" className="w-4 h-4" />,
    <XIcon key="x" />,
    <ThreadsIcon key="threads" />,
    <LinkedInIcon key="linkedin" />,
]

const Hero = () => {
    const marqueeIcons = [...socialIcons, ...socialIcons, ...socialIcons]

    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-8 z-10">
                {/* Social Pill */}
                <div
                    className="w-[180px] overflow-hidden px-4 py-2 bg-black/5 rounded-full backdrop-blur-sm border border-black/5 relative"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
                    }}
                >
                    <motion.div
                        className="flex items-center gap-6 w-max"
                        animate={{
                            x: ["0%", "-33.33%"],
                        }}
                        transition={{
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {marqueeIcons.map((icon, i) => (
                            <div key={i} className="shrink-0 text-black/60">
                                {icon}
                            </div>
                        ))}
                    </motion.div>
                </div>



                <h2 className="text-6xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.9] text-black">
                    Short form <br />
                    done <span className="italic font-serif">right</span>
                </h2>

                <p className="text-xl text-black/60 max-w-md font-sans leading-relaxed">
                    We combine content, management, and paid media to help brands grow and convert on the social platforms that matter most to you.
                </p>

                <Button className="rounded-full bg-black text-white px-8 py-4 h-auto text-lg font-medium hover:bg-black/90 transition-all border-none">
                    Get in touch
                </Button>
            </div>

            <div className="flex-1 relative flex justify-center lg:justify-end">
                <StoryMockup />

                {/* Visual Flair (Optional background glow) */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/10 blur-[120px] rounded-full" />
            </div>
        </section>
    )
}

export default Hero
