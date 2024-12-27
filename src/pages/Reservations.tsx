import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Reservations = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Make a Reservation"
        subtitle="Book your table at Bodacious"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Reserve Your Table</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-8">
              Click below to make your reservation through our booking partner, Quandoo.
            </p>
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://www.quandoo.sg/place/bodacious-bar-bistro-10887/menu", "_blank")}
            >
              Book Now
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Reservations;