import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@lusabaini/ui/components/badge";
import { Button } from "@lusabaini/ui/components/button";
import Reveal from "@lusabaini/ui/components/motion/Reveal";
import TransitionLink from "@lusabaini/ui/components/motion/TransitionLink";
import {
  getAboutPageContent,
  type Milestone,
  type Stat,
  type StoryBlock,
} from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutPageContent();
  return buildPageMetadata({
    pathname: "/sobre",
    title: data?.seoTitle || "Sobre",
    description:
      data?.seoDescription ||
      "Conheça Luiza Sabaini Costa: 6 anos vivendo na Holanda e a experiência que ela usa para guiar brasileiros na mesma jornada.",
  });
}

const fallbackStats: Stat[] = [
  { value: "6+", label: "anos vivendo na Holanda" },
  { value: "3", label: "cidades holandesas como casa" },
  { value: "5", label: "empregos no mercado holandês" },
  { value: "100%", label: "na prática, sem teoria genérica" },
];

const fallbackStory: StoryBlock[] = [
  {
    title: "Como tudo começou",
    body: "Em 2019 eu embarquei para a Holanda com um visto, duas malas e um contrato temporário. Nos primeiros meses eu errei praticamente tudo que dava para errar — e foram exatamente esses tropeços que viraram o meu maior ativo.",
  },
  {
    title: "Trabalho e carreira na Holanda",
    body: "Nesses 6 anos eu passei por cinco empregos diferentes, da hotelaria à tecnologia. Essa variedade me ensinou como funcionam contratos holandeses, negociação salarial e o que recrutadores na Holanda realmente olham no currículo de um brasileiro.",
  },
  {
    title: "Por que consultoria",
    body: "A maioria das pessoas não precisa de mais informação — precisa de alguém que já viveu o processo para filtrar o que importa, montar um plano realista e acompanhar de perto. É isso que eu faço.",
  },
];

export default async function SobrePage() {
  const data = await getAboutPageContent();

  const stats = data?.stats?.length ? data.stats : fallbackStats;
  const storySections = data?.storySections?.length
    ? data.storySections
    : fallbackStory;
  const journey: Milestone[] = data?.journey ?? [];

  const profileImageUrl = data?.profileImage?.url || "/images/sobre-story.jpg";
  const isProfileImageLocal = !data?.profileImage?.url;
  const profileImageAlt =
    data?.profileImage?.alt ||
    "Ilustração de Luiza trabalhando em um café holandês à beira de um canal";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
      {/* Hero */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          {data?.badgeLabel ? (
            <Badge variant="secondary" className="mb-6">
              {data.badgeLabel}
            </Badge>
          ) : null}
          <h1 className="heading-1 text-foreground">
            {data?.headlineStart || "Eu vivi cada etapa dessa"}{" "}
            <span className="italic font-serif">
              {data?.headlineEmphasis || "jornada"}
            </span>
            {data?.headlineEnd || " na pele"}
          </h1>
          <p className="mt-6 text-lead max-w-xl">
            {data?.intro ||
              "Sou a Luiza Sabaini Costa. Há 6 anos troquei o Brasil pela Holanda — cheguei sem conhecer ninguém, com duas malas e muitas dúvidas. Hoje ajudo brasileiros a fazerem essa mesma transição com menos ansiedade e muito mais preparo."}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="hidden sm:block">
          <div className="relative mx-auto max-w-[400px] lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/40 -rotate-2" />
            <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <Image
                src={profileImageUrl}
                alt={profileImageAlt}
                width={720}
                height={960}
                priority
                unoptimized={isProfileImageLocal}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="rounded-2xl border border-black/10 bg-white/50 p-6 text-center"
            >
              <div className="heading-2 text-foreground">{stat.value}</div>
              <div className="mt-2 text-sm text-foreground/50 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Story sections */}
      <div className="mt-20 space-y-14 max-w-3xl">
        {storySections.map((section, i) => (
          <Reveal key={`${section.title}-${i}`} delay={i * 0.04}>
            <section>
              <div className="flex items-baseline gap-4">
                <span className="font-serif italic text-foreground/30 text-xl">
                  0{i + 1}
                </span>
                <h2 className="heading-2 text-foreground">{section.title}</h2>
              </div>
              <div className="mt-4 space-y-4 md:pl-11">
                {section.body
                  .split(/\n\n+/)
                  .map((p) => p.trim())
                  .filter(Boolean)
                  .map((paragraph, j) => (
                    <p key={j} className="text-lead">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Journey timeline */}
      {journey.length > 0 ? (
        <section className="mt-20">
          <Reveal>
            <h2 className="heading-2 text-foreground">A jornada até aqui</h2>
          </Reveal>
          <div className="mt-10 max-w-3xl">
            <ol className="relative border-l border-black/15 pl-8 space-y-10">
              {journey.map((milestone, i) => (
                <Reveal key={`${milestone.title}-${i}`} delay={i * 0.05}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-foreground ring-4 ring-[var(--brand-color)]" />
                    <div className="text-eyebrow">{milestone.period}</div>
                    <h3 className="mt-1 heading-3 text-foreground">
                      {milestone.title}
                    </h3>
                    {milestone.description ? (
                      <p className="mt-2 text-body">{milestone.description}</p>
                    ) : null}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <Reveal>
        <div className="mt-20 rounded-3xl border border-black/10 bg-white/60 px-6 py-10 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="heading-2 text-foreground">
              Quer que eu te acompanhe nessa jornada?
            </h2>
            <p className="mt-2 text-body max-w-lg">
              Me conte o seu momento e a gente monta juntos o plano para a sua
              vida na Holanda.
            </p>
          </div>
          <Button asChild size="lg">
            <TransitionLink href="/contato">Falar comigo</TransitionLink>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
