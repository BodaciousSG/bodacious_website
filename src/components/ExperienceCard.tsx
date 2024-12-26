import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceDetail {
  detail: string;
  idx: number;
}

interface ExperienceCardProps {
  title: string;
  description: string;
  details: string[];
  index: number;
}

const ExperienceDetail = ({ detail, idx }: ExperienceDetail) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
    className="flex items-center gap-2 text-dark-light"
  >
    <ArrowRight className="h-4 w-4 text-primary" />
    {detail}
  </motion.li>
);

const ExperienceCard = ({ title, description, details, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-display text-dark">
            <Star className="h-6 w-6 text-primary" />
            {title}
          </CardTitle>
          <CardDescription className="text-dark-light">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {details.map((detail, idx) => (
              <ExperienceDetail key={idx} detail={detail} idx={idx} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;