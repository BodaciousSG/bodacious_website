import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/30">
        <div className="container text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-6 animate-fade-up">
            Welcome to Bodacious
          </h1>
          <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience dining with attitude - where vibrant flavors meet laid-back sophistication
          </p>
          <Button className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6 animate-fade-up">
            Reserve a Table
          </Button>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Experience Card */}
          <div className="group p-6 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
            <h3 className="text-2xl font-display font-bold text-dark mb-4">
              The Experience
            </h3>
            <p className="text-dark/70 mb-4">
              Discover our unique approach to casual fine dining
            </p>
            <Button variant="link" className="text-primary group-hover:text-primary-light">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Menu Card */}
          <div className="group p-6 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
            <h3 className="text-2xl font-display font-bold text-dark mb-4">
              Our Menu
            </h3>
            <p className="text-dark/70 mb-4">
              Explore our carefully crafted selection of dishes
            </p>
            <Button variant="link" className="text-primary group-hover:text-primary-light">
              View Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Events Card */}
          <div className="group p-6 bg-dark/5 rounded-lg hover:bg-dark/10 transition-colors">
            <h3 className="text-2xl font-display font-bold text-dark mb-4">
              Special Events
            </h3>
            <p className="text-dark/70 mb-4">
              Join us for unique dining experiences
            </p>
            <Button variant="link" className="text-primary group-hover:text-primary-light">
              View Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;