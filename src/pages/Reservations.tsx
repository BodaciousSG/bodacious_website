import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const Reservations = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Make a Reservation"
        subtitle="Join us for an unforgettable dining experience"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 text-center"
      >
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6"
          onClick={() => window.location.href = "https://www.quandoo.sg/place/bodacious-bar-bistro-10887/menu"}
        >
          Make a Reservation
        </Button>
      </motion.div>
    </div>
  );
};

export default Reservations;