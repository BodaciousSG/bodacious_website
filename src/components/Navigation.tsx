import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "People", path: "/people" },
    { name: "Events", path: "/events" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-dark">
          Bodacious
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary-light text-white">
            Reservations
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm py-4 px-6 shadow-lg animate-fade-up">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary-light text-white w-full">
              Reservations
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;