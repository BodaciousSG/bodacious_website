import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PartnerCardProps {
  name: string;
  type: string;
  description: string;
  index: number;
}

const PartnerCard = ({ name, type, description, index }: PartnerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PartnerCard;