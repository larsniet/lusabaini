import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";
import LenisScroll from "@lusabaini/ui/components/motion/LenisScroll";
import {
  brandCssVariables,
  DEFAULT_BRAND_COLOR,
} from "@lusabaini/ui/lib/brand";
import { Providers } from "@/components/Providers";
import { getThemeSettings } from "@/lib/queries";
import ConsentManagedAnalytics from "@/components/ConsentManagedAnalytics";
import {
  buildCanonicalUrl,
  createRobots,
  getMetadataBase,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Not used on initial render, prevents preload warning
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: "Luiza Sabaini Costa — Portfolio",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: buildCanonicalUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: buildCanonicalUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: createRobots(true, true),
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "transparent",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeSettings();
  const brandColor = theme?.brandColor || DEFAULT_BRAND_COLOR;

  return (
    <html lang="en" style={brandCssVariables(brandColor)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <PwaRegister />
        <LenisScroll />
        <Providers>{children}</Providers>
        <ConsentManagedAnalytics />
      </body>
    </html>
  );
}
