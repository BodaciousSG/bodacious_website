import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* The Bodacious Approach Section */}
      <section className="py-20 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            The Bodacious Approach
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              At Bodacious, we believe in creating extraordinary experiences through exceptional food, 
              warm hospitality, and a vibrant atmosphere. Our approach combines innovation with tradition, 
              bringing you a dining experience that's truly unique.
            </p>
          </div>
        </div>
      </section>

      {/* Core Beliefs Section */}
      <section className="py-20 bg-gray-50 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Core Beliefs
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-700">We source only the finest ingredients and maintain the highest standards in everything we do.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Community Focus</h3>
              <p className="text-gray-700">We're more than just a restaurant - we're a gathering place for our community.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Sustainable Practice</h3>
              <p className="text-gray-700">We're committed to environmental responsibility in our operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="relative h-screen mb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/behind-scenes.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                Behind the Scenes
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.location.href = '/people'}
              >
                Meet Our People
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="relative h-screen mb-16">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/partners.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                Our Partners
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.location.href = '/partners'}
              >
                View Partners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Spaces Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/spaces.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold mb-8">
                Our Spaces
              </h2>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.location.href = '/spaces'}
              >
                Explore Spaces
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;