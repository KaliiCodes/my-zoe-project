"use client";

import { useState, ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, content, isOpen, onClick }: AccordionItemProps) => (
  <div className="border rounded-lg overflow-hidden">
    <button
      className="w-full flex justify-between items-center px-4 py-3 bg-purple-700 text-white font-semibold hover:bg-purple-600 transition"
      onClick={onClick}
    >
      {title}
      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
    </button>
    {isOpen && <div className="p-4 bg-gray-50">{content}</div>}
  </div>
);

interface AccordionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={openIndex === idx}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}
