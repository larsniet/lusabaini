"use client";

type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const defaultProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0hp0ah4w";
const defaultDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export function sanityImageLoader({ src, width, quality }: LoaderProps) {
  // ✅ LOCAL FILES: let Next.js handle them
  if (src.startsWith("/") && !src.includes("cdn.sanity.io")) {
    return src;
  }

  let path = src;

  // Accept full CDN URLs and reduce to asset path
  try {
    const parsed = new URL(src);
    if (parsed.hostname === "cdn.sanity.io") {
      path = parsed.pathname.replace(/^\/+/, "");
    }
  } catch {
    // keep as-is
  }

  path = path.replace(/^\/+/, "");

  if (path.startsWith("images/")) {
    path = path.replace(/^images\//, "");
  }

  const prefix = `${defaultProjectId}/${defaultDataset}/`;
  if (path.startsWith(prefix)) {
    path = path.slice(prefix.length);
  }

  const url = new URL(
    `https://cdn.sanity.io/images/${defaultProjectId}/${defaultDataset}/${path}`
  );

  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());

  if (quality) {
    url.searchParams.set("q", quality.toString());
  }

  return url.href;
}

export default sanityImageLoader;
