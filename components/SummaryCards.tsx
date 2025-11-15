"use client";

import { useRouter } from "next/navigation";

export default function SummaryCards() {
  const router = useRouter();

  const cards = [
    {
      title: "About Us",
      description: "Empowering individuals and communities through mentorship.",
      link: "/about",
    },
    {
      title: "Our Programs",
      description: "Tailored mentorship programs for growth and leadership.",
      link: "/programs",
    },
    {
      title: "Activities",
      description: "Community activities and workshops to create impact.",
      link: "/activities",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-6 justify-center">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/20 rounded-lg p-6 w-72 text-black flex flex-col items-center shadow-lg"
        >
          <h3 className="font-bold text-lg mb-2">{card.title}</h3>
          <p className="text-sm mb-4 text-center">{card.description}</p>
          <button
            onClick={() => router.push(card.link)}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
