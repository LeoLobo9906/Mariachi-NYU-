// Performances & collaborations shown on the About page.
// Add photos to public/images/event_photos/web/ and add an entry here.
// Order = display order (newest / most notable first).
export type EventItem = {
  title: string;
  blurb: string;
  photo: string;
  // Optional crop focus (Tailwind object-position class), e.g. "object-top".
  // Defaults to centered.
  focus?: string;
  // Optional photo credit. `ig` is the Instagram handle without the "@".
  credit?: { name: string; ig?: string };
};

export const events: EventItem[] = [
  {
    title: "Tradición del Suelo Mío",
    blurb:
      "Mariachi Violetas concert hosted by NYU Steinhardt in collaboration with Carnegie Hall, part of their Spring 2026 series “United in Sound: America at 250.”",
    photo: "/images/event_photos/web/tradicion-suelo-mio.jpg",
  },
  {
    title: "¡Qué bonita es mi tierra!",
    blurb:
      "Mariachi Violetas concert hosted by NYU Steinhardt in collaboration with Carnegie Hall, part of their Spring 2025 series “Nuestros Sonidos.”",
    photo: "/images/event_photos/web/que-bonita.jpg",
  },
  {
    title: "Ya Mero Opening",
    blurb:
      "Opening of artist Karla Diaz’s Ya Mero exhibition at the Latinx Project.",
    photo: "/images/event_photos/web/ya-mero.jpg",
    credit: { name: "Argenis Apolinario", ig: "argenisphoto" },
  },
  {
    title: "Aguas Frescas",
    blurb:
      "Collaboration with musical artist DEBIT for an event celebrating 10 years of Bárbara Sánchez-Kane’s cross-disciplinary fashion label.",
    photo: "/images/event_photos/web/aguas-frescas.jpg",
    focus: "object-top",
    credit: { name: "Krischan Singh", ig: "kr.schan" },
  },
  {
    title: "NYU Latine Student Celebration",
    blurb:
      "Our third consecutive year performing at NYU’s affinity ceremony for graduating Latine students.",
    photo: "/images/event_photos/web/latine-celebration.jpg",
  },
  {
    title: "Canciones del Corazón: Raíces",
    blurb:
      "Cinco de Mayo performance at 54 Below with Canciones del Corazón, a group of Spanish-language singers.",
    photo: "/images/event_photos/web/canciones-del-corazon.jpg",
  },
  {
    title: "Día de los Muertos at La Sirena",
    blurb:
      "Performance for a festival organized by La Sirena, an NYC-based Mexican folk art store.",
    photo: "/images/event_photos/web/la-sirena.jpg",
  },
  {
    title: "Día de los Muertos with Manhatitlan",
    blurb:
      "Performance at a Día de los Muertos event organized by Manhatitlan, a Queens-based Mexican folklórico group.",
    photo: "/images/event_photos/web/manhatitlan.jpg",
  },
  {
    title: "NYU Steinhardt USG Gala",
    blurb: "NYU Steinhardt Undergraduate Student Government Gala.",
    photo: "/images/event_photos/web/usg-gala.jpg",
  },
  {
    title: "Brooklyn Cyclones: Copa de la Diversión",
    blurb: "Copa de la Diversión celebration with the Brooklyn Cyclones.",
    photo: "/images/event_photos/web/cyclones.jpg",
  },
  {
    title: "Música y Mole Festival",
    blurb:
      "Festival hosted by Mariachi Juvenil Los Tigres, a public high school mariachi based in White Plains.",
    photo: "/images/event_photos/web/musica-y-mole.jpg",
  },
];
