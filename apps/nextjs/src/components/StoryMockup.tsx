"use client"

import { useState, useEffect, useRef } from "react"
import { Asterisk } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, useMotionValue, useTransform } from "motion/react"

import lulu from "@/assets/lulu.webp"

const stories = [
    { src: "/videos/vid1.mp4", type: "video" },
    { src: "/videos/vid2.mp4", type: "video" },
    { src: "/videos/vid3.mp4", type: "video" },
]

const StoryMockup = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    // Use motion values for ultra-smooth updates outside of React's render cycle
    const activeProgress = useMotionValue(0)
    const progressWidth = useTransform(activeProgress, (v) => `${v}%`)

    useEffect(() => {
        let rafId: number
        const currentVideo = videoRefs.current[currentIndex]

        if (!currentVideo) return

        const updateProgress = () => {
            if (currentVideo.duration) {
                const current = (currentVideo.currentTime / currentVideo.duration) * 100
                // This updates the motion value at 60+ FPS
                activeProgress.set(current)
            }
            rafId = requestAnimationFrame(updateProgress)
        }

        const handleEnded = () => {
            handleNext()
        }

        currentVideo.addEventListener("ended", handleEnded)

        // Reset and play
        currentVideo.currentTime = 0
        currentVideo.play().catch((err) => {
            console.error("Video play failed:", err)
        })

        // Start animation loop
        rafId = requestAnimationFrame(updateProgress)

        return () => {
            currentVideo.removeEventListener("ended", handleEnded)
            currentVideo.pause()
            cancelAnimationFrame(rafId)
        }
    }, [currentIndex, activeProgress])

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length)
        activeProgress.set(0)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
        activeProgress.set(0)
    }

    const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        if (x < rect.width * 0.3) {
            handlePrev()
        } else {
            handleNext()
        }
    }

    return (
        <div
            className="relative w-[320px] lg:w-[400px] aspect-[9/18] rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl bg-black cursor-pointer group"
            onClick={handleTap}
        >
            {stories.map((story, index) => (
                <div
                    key={story.src}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-300",
                        index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                    )}
                >
                    <video
                        ref={(el) => { videoRefs.current[index] = el }}
                        src={story.src}
                        className="w-full h-full object-cover"
                        playsInline
                        muted
                        preload="auto"
                    />
                </div>
            ))}

            {/* Story UI Elements */}
            <div className="absolute inset-x-0 top-0 p-4 flex flex-col gap-4 bg-gradient-to-b from-black/60 to-transparent z-20">
                {/* Progress Bars */}
                <div className="flex gap-1.5 w-full">
                    {stories.map((_, index) => (
                        <div key={index} className="h-[2px] flex-1 bg-white/30 rounded-full overflow-hidden">
                            {index === currentIndex ? (
                                <motion.div
                                    className="h-full bg-white"
                                    style={{ width: progressWidth }}
                                />
                            ) : (
                                <div
                                    className="h-full bg-white"
                                    style={{ width: index < currentIndex ? "100%" : "0%" }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full border-2 border-black bg-white overflow-hidden relative">
                            <Image src={lulu} alt="Luiza Sabaini Costa"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-semibold">lusabaini</span>
                        <span className="text-white/60 text-xs text-shadow-sm">6h</span>
                    </div>
                </div>
            </div>

            {/* Asterisk Icon Pill */}
            <div className="absolute bottom-6 right-6 z-20 pointer-events-none">
                <div className="p-4 bg-black rounded-2xl">
                    <Asterisk className="w-8 h-8 text-white" />
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
        </div>
    )
}

export default StoryMockup
