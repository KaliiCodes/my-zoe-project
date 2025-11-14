import React from "react";
import { Eye } from "lucide-react";
import Card from "@/components/Card";

const Vision = () => {
  return (
    <Card
      title="Our Vision"
      description="To be a leading mentorship and coaching organization that empowers individuals to discover their purpose, maximize their potential, and thrive in all spheres of life."
      icon={<Eye size={32} className="text-blue-500" />}
    />
  );
};

export default Vision;
