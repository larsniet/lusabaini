"use client";

import Link from "next/link";
import { Instagram, Asterisk, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-24 pb-12 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between mb-24">
          {/* Branding Column */}
          <div className="flex flex-col items-start gap-8 max-w-md">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black transition-transform group-hover:scale-105">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-medium tracking-[-0.06em] text-black">lusabaini</span>
            </Link>

            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] leading-[1.1] font-medium tracking-[-0.04em] text-black">
                Social media that <br />
                drives <span className="italic font-serif">real</span> results
              </h2>
              <p className="text-lg text-black/50 font-sans tracking-tight">
                Built for creators, businesses, and brands.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-all hover:scale-105">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-all hover:scale-105">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {/* Navigate Column */}
            <div className="flex flex-col gap-8 min-w-[120px]">
              <h3 className="text-sm font-semibold text-black uppercase tracking-tight">Navigate</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Home</Link>
                <Link href="/about" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">About</Link>
                <Link href="/case-studies" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Case Studies</Link>
                <Link href="/blog" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Blog</Link>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-8 min-w-[120px]">
              <h3 className="text-sm font-semibold text-black uppercase tracking-tight">Connect</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/book-a-call" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Book a call</Link>
                <Link href="https://instagram.com" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Instagram</Link>
                <Link href="https://linkedin.com" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">LinkedIn</Link>
                <Link href="https://twitter.com" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Twitter</Link>
              </nav>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-8 min-w-[120px]">
              <h3 className="text-sm font-semibold text-black uppercase tracking-tight">Legal</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/privacy" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Privacy Policy</Link>
                <Link href="/terms" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Terms of Service</Link>
                <Link href="/contact" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">Contact</Link>
                <Link href="/404" className="text-black/50 hover:text-black transition-colors text-lg font-medium tracking-tight">404</Link>
              </nav>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium tracking-tight text-black/40">
          <p>© {currentYear} lusabaini.</p>
          <div className="flex items-center gap-4">
            <p>Built with love</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

