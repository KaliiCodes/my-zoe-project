import React from "react";
import { Target } from "lucide-react";
import Card from "@/components/Card";

const Mission = () => {
  return (
    <Card
      title="Our Mission"
      description="To provide transformative mentorship and personal development programs that inspire growth, enhance leadership, and equip individuals with life skills for impact and excellence."
      icon={<Target size={32} className="text-green-500" />}
    />
  );
};

export default Mission;
