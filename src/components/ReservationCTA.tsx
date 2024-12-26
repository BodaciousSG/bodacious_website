import { motion } from "framer-motion";

const ReservationCTA = () => {
  return (
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
  );
};

export default ReservationCTA;