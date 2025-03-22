import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Partners = () => {
  // Placeholder data for partners
  const partners = [
    {
      name: "Partner 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      contactLink: "#"
    },
    {
      name: "Partner 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      contactLink: "#"
    },
    {
      name: "Partner 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      contactLink: "#"
    },
    {
      name: "Partner 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      contactLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Partners Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-12 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 bg-gray-50 rounded-lg">
                {/* Logo Placeholder */}
                <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-lg">
                  <span className="text-2xl font-bold text-gray-400">{partner.name}</span>
                </div>
                
                {/* Write Up */}
                <div className="flex-grow text-center md:text-left">
                  <p className="text-gray-600">{partner.description}</p>
                </div>
                
                {/* Contact Link */}
                <div className="flex-shrink-0">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white whitespace-nowrap"
                    onClick={() => window.location.href = partner.contactLink}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Menu Section */}
      <section className="relative h-screen">
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
                onClick={() => window.location.href = '/menu'}
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners; 