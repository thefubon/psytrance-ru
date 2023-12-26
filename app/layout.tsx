import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "PsyTrance - Центральный Российский транс-портал [Central Russian Psychedelic & Goa Trance Portal]",
  description:
    "ЦЕНТРАЛЬНЫЙ РОССИЙСКИЙ ТРАНС-ПОРТАЛ - это крупнейший Российский сайт, посвящённый всему, что связано с psychedelic и goa trance музыкой и всех её направлений.",
  keywords:
    "trance, music, goa, psychedelic, goatrance, acid, trip, ambient, dub, party, music, psychedelic, psyche, psy, open, air, dj, techno, links, underground, транс, музыка, даб, трип, гоа, гоатранс, ди-джей, ди-джеи, психоделический, психоделик, влад, копп, психоделия, техно, радио, станция, андерграунд, mp3, dj, fubon, thefubon, yagelproject, yagel, sound, dance, electronic, house, progressive, new, age, noice, rave, ambient, relax, enigmatic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="text-default flex h-full flex-col bg-black bg-pattern-l bg-left-top bg-repeat-y antialiased">
        {children}
        <div className="mt-auto h-[161px] w-full bg-pattern-b bg-left-bottom bg-repeat-x text-[#98CEFA]">
          <div className="h-[161px] w-full bg-pattern-bl bg-left-bottom bg-no-repeat"></div>
        </div>
      </body>
    </html>
  );
}
