import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CalendarCheck, CalendarX } from "lucide-react";
import Navigation from "@/components/Navigation";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "June 15, 2024",
      description: "Exclusive wine tasting event featuring premium selections from our cellar.",
      type: "Members Only",
    },
    {
      title: "Chef's Table Experience",
      date: "July 1, 2024",
      description: "An intimate dining experience with our executive chef.",
      type: "Special Event",
    }
  ];

  const pastEvents = [
    {
      title: "New Year's Eve Gala",
      date: "December 31, 2023",
      description: "A spectacular evening of fine dining and celebration.",
    },
    {
      title: "Summer BBQ Festival",
      date: "August 15, 2023",
      description: "Outdoor grilling event featuring premium meats and seafood.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Events at Bodacious"
        subtitle="Join us for exclusive dining experiences and special celebrations"
      />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-display font-bold mb-8">Members Exclusive Events</h2>
        <Card className="mb-12 bg-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Join our membership program to access exclusive events and special privileges.
            </p>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-display font-bold mb-8">Special Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarCheck className="h-4 w-4" />
                    {event.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-display font-bold mb-8">Our Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarX className="h-4 w-4" />
                    {event.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Events;