import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const People = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Chef",
      image: "/placeholder.svg",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Head Sommelier",
      image: "/placeholder.svg",
      initials: "MC",
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Manager",
      image: "/placeholder.svg",
      initials: "ER",
    },
    {
      name: "David Kim",
      role: "Pastry Chef",
      image: "/placeholder.svg",
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

  return (
    <div className="min-h-screen bg-background">
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
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="font-display font-bold text-xl mb-2">
                {member.name}
              </h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
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
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{partner.name}</CardTitle>
                  <Badge variant="secondary">{partner.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
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
          <Button className="mb-12" size="lg">
            <Mail className="mr-2" />
            Send us your CV
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {position.title}
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                  <Badge variant="outline">{position.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default People;