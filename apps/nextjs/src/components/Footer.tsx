"use client";

import type { FooterLink, NavLink, SocialLink } from "@/lib/queries";
import TransitionLink from "@lusabaini/ui/components/motion/TransitionLink";
import { Button } from "@lusabaini/ui/components/button";
import SocialLinks from "@/components/SocialLinks";

type Props = {
  brandLabel?: string;
  headlineStart?: string;
  headlineEmphasis?: string;
  headlineEnd?: string;
  description?: string;
  socials?: SocialLink[];
  navigationLinks?: NavLink[];
  legalLinks?: FooterLink[];
  cta?: { label?: string };
};

const defaultNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Work", href: "/my-work" },
];

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href);
}

function formatHeadlineEnd(end?: string) {
  const value = (end ?? "").trimEnd();
  if (!value) return "";
  if (/^\s/.test(end ?? "")) return end ?? "";
  // Don't add a space before punctuation like "." or ",".
  if (/^[,.;:!?)/\]]/.test(value)) return value;
  return ` ${value}`;
}

function FooterNavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const safeHref = href?.trim();
  if (!safeHref || safeHref === "#") return null;

  if (isExternalHref(safeHref)) {
    return (
      <a
        href={safeHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <TransitionLink href={safeHref} className={className}>
      {children}
    </TransitionLink>
  );
}

export default function Footer({
  brandLabel,
  headlineStart,
  headlineEmphasis,
  headlineEnd,
  description,
  socials,
  navigationLinks,
  legalLinks,
  cta,
}: Props) {
  const currentYear = new Date().getFullYear();
  const socialData = (socials ?? [])
    .filter((s) => (s?.href ?? "").trim() && (s.href ?? "").trim() !== "#")
    .slice(0, 3);

  const resolvedNavLinks = (navigationLinks ?? [])
    .filter((l) => l?.href && l?.label)
    .slice(0, 3);

  const resolvedLegalLinks = (legalLinks ?? [])
    .filter((l) => l?.href && l?.label)
    .slice(0, 3);

  const navLinks = resolvedNavLinks.length ? resolvedNavLinks : defaultNavLinks;
  const bottomLegalLinks = resolvedLegalLinks;

  const titleStart = headlineStart || "Short-form that turns attention into";
  const titleEmphasis = headlineEmphasis || "customers";
  const titleEnd = headlineEnd || ".";
  const body =
    description ||
    "I create TikTok & Instagram content designed to convert views into booked calls and sales.";
  const formattedTitleEnd = formatHeadlineEnd(titleEnd);

  const ctaLabel = cta?.label?.trim() || "Get in touch";

  return (
    <footer className="w-full mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
            {/* Copy */}
            <div className="flex flex-col gap-5 max-w-xl">
              <TransitionLink
                href="/"
                className="text-lg font-medium tracking-[-0.05em] text-foreground hover:opacity-70 transition-opacity font-sans"
              >
                {brandLabel || "lu sabaini"}
              </TransitionLink>

              <div className="flex flex-col gap-3">
                <h2 className="heading-2 text-foreground">
                  {titleStart}{" "}
                  <span className="italic font-serif">{titleEmphasis}</span>
                  {formattedTitleEnd}
                </h2>
                <p className="text-body font-sans max-w-lg">{body}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-8 lg:items-end">
              <Button asChild size="lg">
                <TransitionLink href="/contact">{ctaLabel}</TransitionLink>
              </Button>

              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium tracking-tight text-foreground/70">
                {navLinks.map((l, i) => (
                  <FooterNavLink
                    key={`${l.href}-${i}`}
                    href={l.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </FooterNavLink>
                ))}
              </nav>

              {socialData.length ? <SocialLinks socials={socialData} /> : null}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-medium tracking-tight text-foreground/40">
            <p>
              © {currentYear} {brandLabel || "lu sabaini"}
            </p>
            {bottomLegalLinks.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {bottomLegalLinks.map((l, i) => (
                  <FooterNavLink
                    key={`${l.href}-${i}`}
                    href={l.href}
                    className="hover:text-foreground/70 transition-colors"
                  >
                    {l.label}
                  </FooterNavLink>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
