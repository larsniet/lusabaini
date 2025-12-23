"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-transparent">
            {/* Progressive Blur Layer */}
            <div
                className="absolute inset-x-0 top-0 h-24 pointer-events-none z-[-1]"
                style={{
                    backdropFilter: "blur(10px)",
                    maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                }}
            />

            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo Section */}
                <Logo />

                {/* Desktop Navigation & Actions Group */}
                <div className="flex items-center gap-8">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium tracking-[-0.04em] text-black hover:opacity-60 transition-opacity font-sans"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button
                            asChild
                            className="hidden sm:inline-flex rounded-full bg-black text-white px-6 py-2 h-auto text-sm font-medium hover:bg-black/90 transition-all border-none"
                        >
                            <Link href="/book-a-call">Book a call</Link>
                        </Button>

                        {/* Framer-style Menu Icon */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative flex h-6 w-6 flex-col items-center justify-center gap-[4px] md:hidden z-50 group"
                            aria-label="Toggle Menu"
                        >
                            <div
                                className={cn(
                                    "h-[2px] w-[20px] rounded-full bg-black transition-all duration-300",
                                    isMenuOpen && "translate-y-[3px] rotate-45"
                                )}
                            />
                            <div
                                className={cn(
                                    "h-[2px] w-[20px] rounded-full bg-black transition-all duration-300",
                                    isMenuOpen && "-translate-y-[3px] -rotate-45"
                                )}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-[#f7f5f2]/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col items-start gap-6 px-6 pt-32 h-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[32px] font-medium tracking-[-0.04em] text-black hover:opacity-60 transition-opacity font-sans"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="mt-4 rounded-full bg-black text-white w-full py-6 h-auto text-xl font-medium"
                    >
                        <Link href="/book-a-call" onClick={() => setIsMenuOpen(false)}>
                            Book a call
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header


