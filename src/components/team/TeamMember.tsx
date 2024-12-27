import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  initials: string;
  index: number;
}

const TeamMember = ({ name, role, image, initials, index }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <Avatar className="w-32 h-32 mx-auto mb-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-display font-bold text-xl mb-2">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </motion.div>
  );
};

export default TeamMember;