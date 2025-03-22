import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Utensils, Wine, Beer } from "lucide-react";
import Navigation from "@/components/Navigation";

const Menu = () => {
  const foodMenu = [
    {
      category: "Our Signature Burgers",
      items: [
        { name: "Classic Beef Burger", description: "Premium beef patty, lettuce, tomato, cheese", price: "24" },
        { name: "Chicken Avocado Burger", description: "Grilled chicken, fresh avocado, aioli", price: "22" },
        { name: "Veggie Delight Burger", description: "Plant-based patty, grilled mushrooms", price: "20" }
      ]
    },
    {
      category: "Soup",
      items: [
        { name: "Mushroom Soup", description: "Creamy wild mushroom soup", price: "12" },
        { name: "Lobster Bisque", description: "Rich and creamy lobster soup", price: "16" }
      ]
    },
    {
      category: "Salads",
      items: [
        { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: "16" },
        { name: "Greek Salad", description: "Fresh vegetables, feta cheese, olives", price: "18" }
      ]
    },
    {
      category: "Sandwich",
      items: [
        { name: "Club Sandwich", description: "Triple-decker with chicken and bacon", price: "20" },
        { name: "Grilled Cheese", description: "Three cheese blend, sourdough bread", price: "16" }
      ]
    },
    {
      category: "Plates with Friends",
      items: [
        { name: "Cheese Platter", description: "Selection of artisanal cheeses", price: "32" },
        { name: "Mixed Grill Platter", description: "Assorted grilled meats and vegetables", price: "48" }
      ]
    },
    {
      category: "Bites",
      items: [
        { name: "Truffle Fries", description: "Hand-cut fries with truffle oil", price: "14" },
        { name: "Chicken Wings", description: "Choice of BBQ or spicy sauce", price: "16" }
      ]
    },
    {
      category: "Mains + Pasta",
      items: [
        { name: "Ribeye Steak", description: "250g grain-fed ribeye", price: "42" },
        { name: "Carbonara", description: "Classic carbonara with pancetta", price: "26" },
        { name: "Seafood Aglio Olio", description: "Mixed seafood, garlic, chili", price: "28" }
      ]
    },
    {
      category: "Pizzas",
      items: [
        { name: "Margherita", description: "Fresh tomatoes, mozzarella, basil", price: "22" },
        { name: "Hawaiian", description: "Ham, pineapple, mozzarella", price: "24" },
        { name: "Pepperoni", description: "Spicy pepperoni, mozzarella", price: "26" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert", price: "14" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with ice cream", price: "16" }
      ]
    }
  ];

  const beverageMenu = [
    {
      category: "0% Mocktails",
      items: [
        { name: "Virgin Mojito", description: "Mint, lime, soda", price: "12" },
        { name: "Tropical Punch", description: "Mixed fruit juices", price: "12" }
      ]
    },
    {
      category: "Barista & Tea",
      items: [
        { name: "Espresso", description: "Double shot", price: "5" },
        { name: "Cappuccino", description: "Classic Italian style", price: "7" },
        { name: "Earl Grey", description: "Premium loose leaf tea", price: "6" }
      ]
    },
    {
      category: "Juice & Sodas",
      items: [
        { name: "Fresh Orange Juice", description: "Freshly squeezed", price: "8" },
        { name: "Craft Sodas", description: "Ask for flavors", price: "6" }
      ]
    },
    {
      category: "Bodacious Cocktails",
      items: [
        { name: "House Negroni", description: "Our signature blend", price: "22" },
        { name: "Espresso Martini", description: "Fresh espresso, vodka", price: "24" }
      ]
    },
    {
      category: "Highballs",
      items: [
        { name: "Whisky Highball", description: "Japanese whisky, soda", price: "18" },
        { name: "Gin & Tonic", description: "Premium gin, tonic", price: "16" }
      ]
    },
    {
      category: "Shots & Shooters",
      items: [
        { name: "B52", description: "Layered coffee liqueur shot", price: "14" },
        { name: "Tequila Shot", description: "Premium tequila", price: "12" }
      ]
    },
    {
      category: "Beers on Tap",
      items: [
        { name: "Craft IPA", description: "Local brewery", price: "14" },
        { name: "Lager", description: "Premium lager", price: "12" }
      ]
    },
    {
      category: "Wines by Glass",
      items: [
        { name: "House Red", description: "Cabernet Sauvignon", price: "16" },
        { name: "House White", description: "Sauvignon Blanc", price: "16" }
      ]
    },
    {
      category: "Premium Wines",
      items: [
        { name: "Château Margaux", description: "Bordeaux, France", price: "380" },
        { name: "Opus One", description: "Napa Valley, USA", price: "420" }
      ]
    },
    {
      category: "Whisky Collections",
      items: [
        { name: "Macallan 12", description: "Speyside", price: "32" },
        { name: "Yamazaki 12", description: "Japan", price: "36" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Food | Drinks"
        subtitle="A curated selection of dishes and beverages"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
            <Utensils className="h-8 w-8" />
            Food Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodMenu.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {section.items.map((item) => (
                      <div key={item.name} className="mb-4 last:mb-0">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                          <span className="font-medium">${item.price}</span>
                        </div>
                        <Separator className="mt-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
            <Beer className="h-8 w-8" />
            Drinks Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beverageMenu.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {section.items.map((item) => (
                      <div key={item.name} className="mb-4 last:mb-0">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-muted-foreground">{item.description}</div>
                          </div>
                          <span className="font-medium">${item.price}</span>
                        </div>
                        <Separator className="mt-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;