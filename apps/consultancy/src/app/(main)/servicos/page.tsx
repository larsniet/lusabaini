import type { Metadata } from "next";
import Reveal from "@lusabaini/ui/components/motion/Reveal";
import { Button } from "@lusabaini/ui/components/button";
import TransitionLink from "@lusabaini/ui/components/motion/TransitionLink";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServicesPageContent } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPageContent();
  return buildPageMetadata({
    pathname: "/servicos",
    title: data?.seoTitle || "Serviços",
    description:
      data?.seoDescription ||
      "Consultoria para visto, moradia, burocracia e adaptação cultural na Holanda.",
  });
}

export default async function ServicosPage() {
  const data = await getServicesPageContent();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
      <Reveal>
        <h1 className="heading-1 text-foreground max-w-3xl">
          {data?.headline || "Como posso te ajudar"}
        </h1>
        {data?.intro ? (
          <p className="mt-5 text-lead max-w-2xl">{data.intro}</p>
        ) : null}
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {(data?.services ?? []).map((service, i) => (
          <Reveal key={`${service.title}-${i}`} delay={i * 0.05}>
            <article className="h-full rounded-3xl border border-black/10 bg-white/55 backdrop-blur-sm p-7 md:p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                <ServiceIcon icon={service.icon} className="h-5 w-5" />
              </div>
              <h2 className="heading-3 text-foreground">{service.title}</h2>
              <p className="mt-3 text-body">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-3xl border border-black/10 bg-white/60 px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="heading-2 text-foreground">
              Não sabe por onde começar?
            </h2>
            <p className="mt-2 text-body max-w-lg">
              Na conversa inicial a gente entende o seu momento e define o
              melhor formato de apoio.
            </p>
          </div>
          <Button asChild size="lg">
            <TransitionLink href="/contato">Agendar conversa</TransitionLink>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
