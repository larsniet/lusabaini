import type { Metadata } from "next";
import Reveal from "@lusabaini/ui/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";
import { getContactPageContent } from "@/lib/queries";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactPageContent();
  return buildPageMetadata({
    pathname: "/contato",
    title: data?.seoTitle || "Contato",
    description:
      data?.seoDescription ||
      "Entre em contato com Luiza Sabaini Costa para consultoria sobre morar na Holanda.",
  });
}

export default async function ContatoPage() {
  const data = await getContactPageContent();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h1 className="heading-1 text-foreground">
            {data?.headline || "Vamos conversar sobre a sua mudança"}
          </h1>
          {data?.intro ? <p className="mt-5 text-lead">{data.intro}</p> : null}
          {data?.supportingText ? (
            <p className="mt-4 text-body">{data.supportingText}</p>
          ) : null}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
