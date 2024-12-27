import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 11:00 PM" },
    { day: "Friday", hours: "11:00 AM - 12:00 AM" },
    { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Bodacious"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Getting Here
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  70 Biopolis Street, #01-05,<br />
                  Singapore 138547
                </p>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7978547563747!2d103.79119661475403!3d1.3040699990477583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a43b6e4b249%3A0x7c2c99f8d89f9b0c!2s70%20Biopolis%20St%2C%20Singapore%20138547!5e0!3m2!1sen!2ssg!4v1647850822744!5m2!1sen!2ssg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {openingHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Enquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For all enquiries, please email us at:{" "}
                <a
                  href="mailto:bodacioussg@gmail.com"
                  className="text-primary hover:underline"
                >
                  bodacioussg@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;