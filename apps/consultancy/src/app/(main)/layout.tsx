import PageTransition from "@lusabaini/ui/components/motion/PageTransition";
import TransitionShell from "@lusabaini/ui/components/motion/TransitionShell";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getShellContent } from "@/lib/queries";
import { TransitionProvider } from "@lusabaini/ui/components/motion/TransitionContext";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { siteSettings, footer } = await getShellContent();

  return (
    <TransitionProvider exitDurationMs={420}>
      <Header
        navLinks={siteSettings?.mainNavigation}
        cta={siteSettings?.ctaButton ?? undefined}
      />
      <PageTransition>
        <TransitionShell>
          <main className="relative min-h-screen w-full overflow-x-hidden pt-[calc(4rem+env(safe-area-inset-top))]">
            {children}
            <Footer
              brandLabel={footer?.brandLabel}
              headlineStart={footer?.headlineStart}
              headlineEmphasis={footer?.headlineEmphasis}
              headlineEnd={footer?.headlineEnd}
              description={footer?.description}
              navigationLinks={siteSettings?.mainNavigation}
              cta={siteSettings?.ctaButton ?? undefined}
            />
          </main>
        </TransitionShell>
      </PageTransition>
    </TransitionProvider>
  );
}
