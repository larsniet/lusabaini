import { NextResponse, type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

const expectedSecret = process.env.REVALIDATE_SECRET;

function unauthorized() {
  return NextResponse.json(
    { ok: false, error: "Unauthorized" },
    { status: 401 }
  );
}

export async function POST(request: NextRequest) {
  if (!expectedSecret) {
    return NextResponse.json(
      { ok: false, error: "Server missing REVALIDATE_SECRET" },
      { status: 500 }
    );
  }

  const provided =
    request.headers.get("x-revalidate-secret") ??
    new URL(request.url).searchParams.get("secret");

  if (provided !== expectedSecret) return unauthorized();

  // Invalidate all relevant cached tags
  revalidateTag("homepage-content", "max");
  revalidateTag("theme-settings", "max");

  return NextResponse.json({
    ok: true,
    revalidated: ["homepage-content", "theme-settings"],
  });
}

export async function GET(request: NextRequest) {
  // Allow GET for simple webhook testing (e.g., curl in a browser), still protected by secret.
  return POST(request);
}
