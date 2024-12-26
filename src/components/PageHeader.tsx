import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center mb-16 pt-24"
    >
      <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-dark-light">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default PageHeader;