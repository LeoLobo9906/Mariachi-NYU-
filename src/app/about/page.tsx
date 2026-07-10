import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { Mono } from "@/components/ui/Mono";
import { LogoWatermark } from "@/components/ui/LogoWatermark";
import { club } from "@/content/club";
import { SECTION_LABELS } from "@/content/roster";
import { events } from "@/content/events";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
 title: "About",
 description: "Who NYU Mariachi is: a student-led ensemble bringing authentic Mexican mariachi to New York City.",
 path: "/about",
});

const SECTIONS: { key: string; photo: string }[] = [
 { key: "armonia", photo: "/images/groups/armonia.jpg" },
 { key: "violins", photo: "/images/groups/violins.jpg" },
 { key: "woodwind_brass", photo: "/images/groups/brass.jpg" },
 { key: "vocalists", photo: "/images/mariachi_photos/photo_1.png" },
];

export default function AboutPage() {
 return (
 <>
 <LogoWatermark />
 <PageHeader
 eyebrow="Our story"
 title="About"
 intro="A student-led mariachi ensemble bringing the living traditions of Mexico to New York University."
 />

 {/* Lead: big statement + framed photo -------------------------------- */}
 <section className="pb-20 md:pb-28">
 <Container>
 <div className="grid items-center gap-12 md:grid-cols-12 md:gap-14">
 <div className="md:col-span-7">
 <Reveal>
 <p className="text-lg leading-relaxed text-bone-dim md:text-xl">
 {club.story}
 </p>
 </Reveal>
 <Reveal delay={0.1}>
 <div className="mt-8 flex items-center gap-4">
 <Mono className="h-12 w-auto text-violet" />
 <span className="text-sm uppercase tracking-[0.3em] text-gold-300">
 2023 · New York University · Steinhardt
 </span>
 </div>
 </Reveal>
 </div>
 <div className="md:col-span-5">
 <Reveal delay={0.1}>
 <Parallax className="relative aspect-[4/5] w-full overflow-hidden neon-rim" distance={40}>
 <Image
 src="/images/groups/diego.jpg"
 alt="NYU Mariachi Violetas performing"
 fill
 sizes="(max-width: 768px) 100vw, 40vw"
 className="object-cover"
 />
 </Parallax>
 </Reveal>
 </div>
 </div>
 </Container>
 </section>

 {/* The sections — photo cards ---------------------------------------- */}
 <section className="py-20 md:py-28">
 <Container>
 <Reveal>
 <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Inside the ensemble</p>
 <h2 className="mb-12 font-display text-4xl text-bone md:text-5xl">Our Sections</h2>
 </Reveal>
 <div className="grid gap-8 md:grid-cols-2">
 {SECTIONS.map((s, i) => (
 <Reveal key={s.key} delay={(i % 2) * 0.1}>
 <article className="group overflow-hidden border border-violet/15 bg-ink-800">
 <div className="relative aspect-[16/9] overflow-hidden">
 <Image
 src={s.photo}
 alt={SECTION_LABELS[s.key]}
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 className="object-cover grayscale-[0.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-shadow via-shadow/10 to-transparent" />
 <h3 className="absolute bottom-4 left-5 font-display text-3xl text-white">
 {SECTION_LABELS[s.key]}
 </h3>
 </div>
 </article>
 </Reveal>
 ))}
 </div>
 </Container>
 </section>

 {/* Performances & collaborations ------------------------------------- */}
 <section className="py-20 md:py-28">
 <Container>
 <Reveal>
 <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Where we&apos;ve played</p>
 <h2 className="mb-4 font-display text-4xl text-bone md:text-5xl">
 Performances &amp; Collaborations
 </h2>
 <p className="mb-12 max-w-2xl text-lg leading-relaxed text-bone-dim">
 A few of the many performance opportunities we&apos;ve had over the past three years,
 and some of the wonderful organizations and individuals with whom we&apos;ve collaborated.
 </p>
 </Reveal>
 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
 {events.map((e, i) => (
 <Reveal key={e.title} delay={(i % 3) * 0.08}>
 <article className="group flex h-full flex-col overflow-hidden border border-violet/15 bg-ink-800">
 <div className="relative aspect-[4/3] overflow-hidden">
 <Image
 src={e.photo}
 alt={e.title}
 fill
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 className={`object-cover transition-transform duration-700 group-hover:scale-105 ${e.focus ?? ""}`}
 />
 </div>
 <div className="flex flex-1 flex-col p-6">
 <h3 className="font-display text-2xl leading-tight text-bone">{e.title}</h3>
 <p className="mt-3 text-sm leading-relaxed text-bone-dim">{e.blurb}</p>
 </div>
 </article>
 </Reveal>
 ))}
 </div>
 </Container>
 </section>

 {/* Mission pull-quote ------------------------------------------------ */}
 <section className="pb-24">
 <Container>
 <Reveal>
 <div className="mx-auto max-w-3xl bg-ink-800 px-8 py-16 text-center">
 <Image
 src="/images/logo/nyu_logo.png"
 alt=""
 aria-hidden
 width={80}
 height={80}
 className="mx-auto mb-6 h-16 w-auto"
 />
 <p className="font-display text-3xl leading-snug text-bone md:text-4xl">
 Honoring cultural heritage, building community, and sharing live mariachi across New York City.
 </p>
 <Link
 href="/contact"
 className="btn-glow mt-10 inline-flex bg-gold px-8 py-4 text-sm uppercase tracking-widest text-white transition-transform hover:scale-105"
 >
 Book Mariachi Violetas
 </Link>
 </div>
 </Reveal>
 </Container>
 </section>
 </>
 );
}
