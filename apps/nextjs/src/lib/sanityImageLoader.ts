"use client";

type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const defaultProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0hp0ah4w";
const defaultDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Builds a Sanity CDN URL that Next.js <Image> can use server-side.
export function sanityImageLoader({ src, width, quality }: LoaderProps) {
  let path = src;

  // Accept full CDN URLs and reduce to the asset path portion.
  try {
    const parsed = new URL(src);
    if (parsed.hostname === "cdn.sanity.io") {
      path = parsed.pathname.replace(/^\/+/, "");
    }
  } catch {
    // If src is already a path, keep it as-is.
  }

  // Normalize leading slashes.
  path = path.replace(/^\/+/, "");

  // Strip "images/" prefix to avoid double "images".
  if (path.startsWith("images/")) {
    path = path.replace(/^images\//, "");
  }

  // If the path already embeds projectId/dataset, remove them to avoid duplication.
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
