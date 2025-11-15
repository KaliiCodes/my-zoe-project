import React from "react";
import { Shield, Star, Award, Users, Heart, Lightbulb } from "lucide-react";

const CoreValues = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "We uphold honesty and ethical standards in all our engagements." },
    { icon: Star, title: "Empowerment", description: "We believe in unlocking every individual's inner potential." },
    { icon: Award, title: "Excellence", description: "We pursue the highest standards in mentorship and delivery." },
    { icon: Users, title: "Collaboration", description: "We value teamwork and strategic partnerships." },
    { icon: Heart, title: "Service", description: "We are committed to positively transforming lives and communities." },
    { icon: Lightbulb, title: "Innovation", description: "We embrace creativity and continuous improvement in mentorship approaches." },
    { icon: Heart, title: "Respect", description: "We value every person's dignity and diversity." },
    { icon: Award, title: "Professionalism", description: "We model discipline, accountability, and time consciousness." },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all"
          >
            {/* Icon on top */}
            <IconComponent size={36} className="text-yellow-400 mb-4" />

            {/* Title in black */}
            <h3 className="text-black text-lg font-bold mb-2">{value.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm">{value.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValues;
