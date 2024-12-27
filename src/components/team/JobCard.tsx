import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  index: number;
}

const JobCard = ({ title, type, location, index }: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
          <Badge variant="outline">{type}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{location}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JobCard;