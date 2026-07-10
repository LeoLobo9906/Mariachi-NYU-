import Link from "next/link";
import { club } from "@/content/club";
import { Mono } from "@/components/ui/Mono";
import { Container } from "./Container";

export function Footer() {
 return (
 <footer className="relative overflow-hidden border-t border-violet/15 bg-ink-800">
 {/* faint calavera watermark */}
 <Mono className="pointer-events-none absolute -right-6 -top-10 h-56 w-auto text-violet opacity-[0.08]" />
 <Container className="relative z-10 py-16">
 <div className="grid gap-10 md:grid-cols-3">
 <div>
 <p className="font-display text-2xl text-bone">Mariachi Violetas de NYU</p>
 <p className="mt-3 max-w-xs text-sm text-bone-dim">{club.tagline}</p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-widest text-gold">Reach us</p>
 <a href={`mailto:${club.email}`} className="mt-3 block text-bone hover:text-gold">
 {club.email}
 </a>
 <p className="mt-1 text-sm text-bone-dim">{club.department}</p>
 <p className="text-sm text-bone-dim">{club.location}</p>
 </div>
 <div>
 <p className="text-xs uppercase tracking-widest text-gold">Follow</p>
 <ul className="mt-3 space-y-1">
 {club.socials.map((s) => (
 <li key={s.label}>
 <a href={s.href} className="text-bone hover:text-gold" target="_blank" rel="noreferrer">
 {s.label}
 </a>
 </li>
 ))}
 </ul>
 <Link
 href="/contact"
 className="mt-6 inline-flex border border-gold px-5 py-2 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-white"
 >
 Book us
 </Link>
 </div>
 </div>
 <div className="mt-12 flex flex-col justify-between gap-2 border-t border-violet/15 pt-6 text-xs text-bone-dim md:flex-row">
 <span>© {new Date().getFullYear()} Mariachi Violetas de NYU. All rights reserved.</span>
 <span>{club.department}</span>
 </div>
 </Container>
 </footer>
 );
}
