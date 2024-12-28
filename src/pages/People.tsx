import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import TeamMember from "@/components/team/TeamMember";
import PartnerCard from "@/components/team/PartnerCard";
import JobCard from "@/components/team/JobCard";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const People = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Chef",
      image: "https://media.istockphoto.com/id/489776304/photo/pretty-asian-woman-standing-outdoors.jpg?s=612x612&w=0&k=20&c=mEvCSX8_x5kZynkHO7ALzDw6fMP1xkhmy9tkrAwHSC4=",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Head Sommelier",
      image: "https://t3.ftcdn.net/jpg/04/49/90/74/360_F_449907487_QrLn0cIQajy4fVWcQJSLDAXUBq1vvrYJ.jpg",
      initials: "MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Manager",
      image: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      initials: "ER",
    },
    {
      name: "David Kim",
      role: "Pastry Chef",
      image: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      initials: "DK",
    },
  ];

  const partners = [
    {
      name: "Fresh Fields Farm",
      type: "Local Produce",
      description: "Providing organic, seasonal vegetables and herbs.",
    },
    {
      name: "Ocean's Finest",
      type: "Seafood Supplier",
      description: "Sustainable seafood caught daily from local waters.",
    },
    {
      name: "Artisan Wines",
      type: "Wine Merchant",
      description: "Curating our extensive wine collection.",
    },
  ];

  const positions = [
    {
      title: "Senior Chef de Partie",
      type: "Full-time",
      location: "Main Kitchen",
    },
    {
      title: "Sommelier",
      type: "Full-time",
      location: "Front of House",
    },
    {
      title: "Server",
      type: "Part-time",
      location: "Front of House",
    },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:bodacioussg@gmail.com";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Our People"
        subtitle="Meet the passionate individuals behind Bodacious and learn about opportunities to join our team."
      />

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          The Bodacious Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 bg-accent/20"
      >
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} {...partner} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Work with Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Work with Us
        </h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            Join our passionate team and be part of creating extraordinary dining
            experiences. We're always looking for talented individuals who share our
            values and dedication to excellence.
          </p>
          <Button className="mb-12" size="lg" onClick={handleEmailClick}>
            <Mail className="mr-2" />
            Send us your CV
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <div key={position.title} className="cursor-pointer" onClick={handleEmailClick}>
              <JobCard {...position} index={index} />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default People;