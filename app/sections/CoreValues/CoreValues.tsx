import React from "react";
import { Shield, Star, Award, Users, Heart, Lightbulb } from "lucide-react";
import Card from "@/components/Card";

const CoreValues = () => {
  const values = [
    { icon: <Shield size={24} className="text-purple-500" />, title: "Integrity", description: "We uphold honesty and ethical standards in all our engagements." },
    { icon: <Star size={24} className="text-yellow-500" />, title: "Empowerment", description: "We believe in unlocking every individual's inner potential." },
    { icon: <Award size={24} className="text-red-500" />, title: "Excellence", description: "We pursue the highest standards in mentorship and delivery." },
    { icon: <Users size={24} className="text-teal-500" />, title: "Collaboration", description: "We value teamwork and strategic partnerships." },
    { icon: <Heart size={24} className="text-pink-500" />, title: "Service", description: "We are committed to positively transforming lives and communities." },
    { icon: <Lightbulb size={24} className="text-orange-500" />, title: "Innovation", description: "We embrace creativity and continuous improvement in mentorship approaches." },
    { icon: <Heart size={24} className="text-indigo-500" />, title: "Respect", description: "We value every person's dignity and diversity." },
    { icon: <Award size={24} className="text-gray-700" />, title: "Professionalism", description: "We model discipline, accountability, and time consciousness." },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <Card key={index} title={value.title} description={value.description} icon={value.icon} />
      ))}
    </div>
  );
};

export default CoreValues;
