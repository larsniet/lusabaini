"use client"

import React from 'react'
import { motion } from 'motion/react'

const brands = [
    { name: 'ore.', className: 'font-serif' },
    { name: 'ther', className: 'font-mono italic' },
    { name: 'Amsterdam', prefix: '○', className: 'font-sans' },
    { name: 'MILANO', prefix: 'M ', className: 'font-sans tracking-widest bg-gray-200 px-1' },
    { name: 'venice.', className: 'font-serif lowercase' },
    { name: 'ther', className: 'font-mono italic' },
    { name: 'Amsterdam', prefix: '○', className: 'font-sans' },
]

const BrandLogos = () => {
    // Duplicate the brands array to create a seamless loop
    const marqueeBrands = [...brands, ...brands]

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <p className="text-sm text-black/40 font-sans max-w-[140px] leading-tight shrink-0">
                    Brands we've helped grow on social.
                </p>
                <div
                    className="relative flex-1 overflow-hidden opacity-40 grayscale"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
                    }}
                >
                    <motion.div
                        className="flex items-center gap-x-20 whitespace-nowrap py-2 w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {marqueeBrands.map((brand, i) => (
                            <div key={i} className={`text-2xl font-medium text-black flex items-center gap-2 ${brand.className} shrink-0`}>
                                {brand.prefix && <span className="text-xl">{brand.prefix}</span>}
                                {brand.name}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default BrandLogos

