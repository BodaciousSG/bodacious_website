import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import TeamMember from "@/components/team/TeamMember";
import PartnerCard from "@/components/team/PartnerCard";
import JobCard from "@/components/team/JobCard";
import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";

const People = () => {
  // Placeholder data - replace with actual data
  const founders = [
    {
      name: "Founder Name 1",
      role: "Founder & CEO",
      image: "/images/founder1.jpg"
    },
    {
      name: "Founder Name 2",
      role: "Founder & Creative Director",
      image: "/images/founder2.jpg"
    }
  ];

  const teamMembers = [
    {
      name: "Team Member Name",
      role: "Team Role",
      image: "/images/team-member.jpg"
    }
  ];

  const frontOfHouse = [
    {
      name: "Staff Name",
      role: "Front of House Role",
      image: "/images/staff1.jpg"
    }
  ];

  const backOfHouse = [
    {
      name: "Staff Name",
      role: "Back of House Role",
      image: "/images/staff2.jpg"
    }
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* The Team Behind Section */}
      <section className="py-20 mb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
            The Team Behind
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Meet the passionate individuals who make Bodacious more than just a restaurant - 
              we're a family dedicated to creating extraordinary dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founders Section */}
      <section className="py-20 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square w-full max-w-md mx-auto mb-6 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-gray-600">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-20 mb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            The Team
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 place-items-center">
              <div className="md:col-start-2">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center w-full max-w-md">
                    <div className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Driving Force Section */}
      <section className="py-20 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our Driving Force
          </h2>
          
          {/* Front of House */}
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Front of House</h3>
              <div className="grid gap-8">
                {frontOfHouse.map((staff, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{staff.name}</h4>
                      <p className="text-gray-600">{staff.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back of House */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Back of House</h3>
              <div className="grid gap-8">
                {backOfHouse.map((staff, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{staff.name}</h4>
                      <p className="text-gray-600">{staff.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work with Us Button */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              onClick={() => window.location.href = '/careers'}
            >
              Work with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;