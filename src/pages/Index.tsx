import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const navigate = useNavigate();
  const reservationUrl = "https://www.quandoo.sg/place/bodacious-bar-bistro-10887/menu";
  
  // Slideshow images and state
  const slides = [
    {
      image: "/images/restaurant-1.jpg",
      title: "Welcome to Bodacious",
      subtitle: "Experience dining with attitude - where vibrant flavors meet laid-back sophistication"
    },
    {
      image: "/images/restaurant-2.jpg",
      title: "Culinary Excellence",
      subtitle: "Where every dish tells a story and every meal becomes a memory"
    },
    {
      image: "/images/restaurant-3.jpg",
      title: "Modern Dining",
      subtitle: "Contemporary cuisine in a sophisticated atmosphere"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 11:00 PM" },
    { day: "Friday", hours: "11:00 AM - 12:00 AM" },
    { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Section 1: Hero Slideshow */}
      <section className="relative h-screen mb-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white p-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
                  onClick={() => window.open(reservationUrl, '_blank')}
                >
                  Make a Reservation
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 2: Experience */}
      <section className="relative h-screen mb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/experience.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                The Bodacious Experience
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => navigate('/experience')}
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Events */}
      <section className="relative h-screen mb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/events.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                Bodacious Events
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => navigate('/events')}
              >
                View Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Menu */}
      <section className="relative h-screen mb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/menu.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                Our Menu
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => navigate('/menu')}
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact Form & Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your message" className="h-32" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
              <div className="grid gap-6">
                <div>
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    70 Biopolis Street, #01-05,<br />
                    Singapore 138547
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
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
                </div>
                <div>
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a
                      href="mailto:bodacioussg@gmail.com"
                      className="text-primary hover:underline"
                    >
                      bodacioussg@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" onClick={() => navigate('/experience')}>Experience</Button>
                  <Button variant="outline" onClick={() => navigate('/events')}>Events</Button>
                  <Button variant="outline" onClick={() => navigate('/menu')}>Menu</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;