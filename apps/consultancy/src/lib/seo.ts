import type { Metadata } from "next";

const LOCAL_FALLBACK_ORIGIN = "http://localhost:3001";
const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

export const SITE_NAME = "Luiza Sabaini Costa — Consultoria Holanda";
export const SITE_DESCRIPTION =
  "Consultoria prática para brasileiros que querem se mudar ou viver na Holanda — visto, moradia, burocracia e adaptação cultural.";

type PageMetadataInput = {
  pathname: string;
  title: string;
  description: string;
  index?: boolean;
  follow?: boolean;
};

function isLocalHostname(hostname: string) {
  return (
    LOCAL_HOSTNAMES.has(hostname) ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local")
  );
}

function parseConfiguredOrigin(rawValue?: string | null): URL | null {
  const value = rawValue?.trim();
  if (!value) return null;

  try {
    const parsed = /^(https?:)?\/\//i.test(value)
      ? new URL(value)
      : new URL(`https://${value}`);

    const protocol = isLocalHostname(parsed.hostname) ? "http:" : "https:";
    const host = parsed.port
      ? `${parsed.hostname}:${parsed.port}`
      : parsed.hostname;
    return new URL(`${protocol}//${host}`);
  } catch {
    return null;
  }
}

const canonicalOrigin =
  parseConfiguredOrigin(process.env.NEXT_PUBLIC_SITE_DOMAIN) ??
  new URL(LOCAL_FALLBACK_ORIGIN);

export function getMetadataBase() {
  return new URL(canonicalOrigin.toString());
}

export function buildCanonicalUrl(pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalizedPath, canonicalOrigin).toString();
}

export function createRobots(
  index = true,
  follow = true
): NonNullable<Metadata["robots"]> {
  return {
    index,
    follow,
    googleBot: {
      index,
      follow,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export function buildPageMetadata({
  pathname,
  title,
  description,
  index = true,
  follow = true,
}: PageMetadataInput): Metadata {
  const canonicalUrl = buildCanonicalUrl(pathname);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: createRobots(index, follow),
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "pt_BR",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
