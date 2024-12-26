import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import ExperienceCard from "@/components/ExperienceCard";
import ReservationCTA from "@/components/ReservationCTA";

const Experience = () => {
  const experiences = [
    {
      title: "The Bodacious Experience",
      description: "Immerse yourself in a culinary journey that combines innovative flavors with a laid-back atmosphere.",
      details: [
        "Carefully curated seasonal menus",
        "Handcrafted cocktails and premium spirits",
        "Intimate dining spaces with vibrant energy",
        "Live music and entertainment events",
      ],
    },
    {
      title: "Private Dining",
      description: "Host your special occasions in our exclusive private dining rooms.",
      details: [
        "Customizable menus",
        "Personal service staff",
        "State-of-the-art audiovisual equipment",
        "Capacity for up to 30 guests",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHeader
        title="The Bodacious Experience"
        subtitle="Where every moment is crafted to delight your senses"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              title={exp.title}
              description={exp.description}
              details={exp.details}
            />
          ))}
        </div>

        <ReservationCTA />
      </div>
    </div>
  );
};

export default Experience;