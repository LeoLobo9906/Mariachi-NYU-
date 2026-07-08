import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { LogoWatermark } from "@/components/ui/LogoWatermark";
import { SemesterRoster } from "@/components/members/SemesterRoster";
import { roster } from "@/content/roster";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Members",
  description: "Meet the musicians of NYU Mariachi, semester by semester.",
  path: "/members",
});

export default function MembersPage() {
  return (
    <>
      <LogoWatermark />
      <PageHeader
        eyebrow="Meet your mariachi"
        title="Members"
        intro="Every semester brings new talent. Get to know our members, new and old!"
      />
      <section className="pb-32">
        <Container>
          <SemesterRoster semesters={roster} />
        </Container>
      </section>
    </>
  );
}
