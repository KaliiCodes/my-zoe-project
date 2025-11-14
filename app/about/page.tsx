import React from "react";
import Vision from "@/app/sections/Vision/Vision";
import Mission from "@/app/sections/Mission/Mission";
import CoreValues from "@/app/sections/CoreValues/CoreValues";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
    
      <div className="text-center mb-16">
        <Image src="/images/zoe-logo.jpg" alt="Zoe Logo" width={120} height={120} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Zoe Mentorship Endeavors</h1>
        <p className="text-xl text-blue-500 font-semibold mb-4">Admirable Transformation</p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Vision />
        <Mission />
      </div>


      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
        <p className="text-gray-600">The principles that guide everything we do</p>
      </div>

      <CoreValues />
    </main>
  );
};

export default AboutPage;
