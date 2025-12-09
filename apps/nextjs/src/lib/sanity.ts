import "server-only";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0hp0ah4w";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn:
    process.env.NODE_ENV === "production" && !process.env.SANITY_READ_TOKEN,
  token: process.env.SANITY_READ_TOKEN,
  perspective: process.env.SANITY_READ_TOKEN ? "previewDrafts" : "published",
});
