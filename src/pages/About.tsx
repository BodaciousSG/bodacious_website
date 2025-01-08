import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const About = () => {
  const approaches = [
    {
      title: "bold Flavors",
      description:
        "We believe in creating dishes that make a statement, combining unexpected ingredients with classic techniques.",
    },
    {
      title: "Casual Sophistication",
      description:
        "Fine dining doesn't have to be stuffy. We create an atmosphere that's refined yet relaxed.",
    },
    {
      title: "Local Connection",
      description:
        "We work closely with local farmers and producers to bring the best seasonal ingredients to your plate.",
    },
    {
      title: "Innovation",
      description:
        "Our menu evolves constantly, pushing boundaries while respecting culinary traditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHeader
        title="The Bodacious Approach"
        subtitle="Where attitude meets excellence in every dish"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-xl text-dark-light leading-relaxed">
            At Bodacious, we're redefining the dining experience with our unique
            blend of exceptional cuisine and vibrant atmosphere. Our approach is
            simple: create memorable moments through food that excites and
            surroundings that inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary/20 p-8 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <h3 className="text-2xl font-display font-bold text-dark mb-4 flex items-center gap-2">
                <ArrowRight className="h-6 w-6 text-primary" />
                {approach.title}
              </h3>
              <p className="text-dark-light">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
