import type { CSSProperties } from "react";

export const DEFAULT_BRAND_COLOR = "#f9f3eb";

function clampChannel(value: number) {
  return Math.min(255, Math.max(0, value));
}

export function shiftHexColor(hex: string, shift: number) {
  const match = /^#?([a-fA-F0-9]{6})([a-fA-F0-9]{2})?$/.exec(hex.trim());
  if (!match) return hex;
  const num = parseInt(match[1], 16);
  const r = clampChannel((num >> 16) + shift);
  const g = clampChannel(((num >> 8) & 0xff) + shift);
  const b = clampChannel((num & 0xff) + shift);
  const alpha = match[2]?.toLowerCase() ?? "";
  return `#${[r, g, b]
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")}${alpha}`;
}

/** Derives the CSS variables injected on <html> from the CMS brand color. */
export function brandCssVariables(brandColor: string): CSSProperties {
  return {
    "--brand-color": brandColor,
    "--brand-light": shiftHexColor(brandColor, 28),
    "--brand-dark": shiftHexColor(brandColor, -35),
    "--brand-soft": shiftHexColor(brandColor, 55),
  } as CSSProperties;
}
