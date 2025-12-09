import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-card bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              Past Projects
              <Sparkles
                className="w-4 h-4"
                style={{ color: "var(--brand-color, #ff7edb)" }}
              />
            </h1>
            <p className="text-xs text-gray-500">
              Luiza Sabaini Costa • Portfolio
            </p>
          </div>
        </div>
      </header>

      <div className="text-center py-8 pb-12">
        <p className="text-sm text-gray-400">
          Want to see more?
          <a
            href="mailto:contact@example.com"
            className="font-medium hover:underline"
            style={{ color: "var(--brand-color, #ff7edb)" }}
          >
            Request full media kit
          </a>
        </p>
      </div>
    </main>
  );
}
