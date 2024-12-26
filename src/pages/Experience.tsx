import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
          The Bodacious Experience
        </h1>
        <p className="text-lg text-dark-light">
          Where every moment is crafted to delight your senses
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-display text-dark">
                  <Star className="h-6 w-6 text-primary" />
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-dark-light">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {exp.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-2 text-dark-light"
                    >
                      <ArrowRight className="h-4 w-4 text-primary" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-xl font-display text-dark mb-8">
          Ready to experience Bodacious?
        </p>
        <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-md transition-colors duration-300">
          Make a Reservation
        </button>
      </motion.div>
    </div>
  );
};

export default Experience;