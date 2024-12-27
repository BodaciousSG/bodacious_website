import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Utensils, Wine, Beer } from "lucide-react";

const Menu = () => {
  const foodMenu = [
    {
      category: "Starters",
      items: [
        { name: "Truffle Fries", price: "16" },
        { name: "Calamari", price: "18" },
      ]
    },
    {
      category: "Mains",
      items: [
        { name: "Wagyu Burger", price: "32" },
        { name: "Lobster Pasta", price: "38" },
      ]
    }
  ];

  const beverageMenu = [
    {
      category: "Cocktails",
      items: [
        { name: "Signature Old Fashioned", price: "24" },
        { name: "Espresso Martini", price: "22" },
      ]
    },
    {
      category: "Mocktails",
      items: [
        { name: "Virgin Mojito", price: "14" },
        { name: "Passion Fruit Fizz", price: "12" },
      ]
    }
  ];

  const whiskyList = [
    { name: "Macallan 12", region: "Speyside", price: "32" },
    { name: "Yamazaki 12", region: "Japan", price: "36" },
  ];

  const wineList = [
    { name: "Château Margaux 2015", region: "Bordeaux", price: "380" },
    { name: "Opus One 2018", region: "Napa Valley", price: "420" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Our Menu"
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
            Food Menu
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
                    {section.items.map((item, i) => (
                      <div key={item.name} className="mb-4 last:mb-0">
                        <div className="flex justify-between">
                          <span>{item.name}</span>
                          <span>${item.price}</span>
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
            Beverage Menu
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
                          <span>{item.name}</span>
                          <span>${item.price}</span>
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
          <h2 className="text-3xl font-display font-bold mb-8">Whisky List</h2>
          <Card>
            <CardContent className="pt-6">
              {whiskyList.map((whisky) => (
                <div key={whisky.name} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{whisky.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {whisky.region}
                      </span>
                    </div>
                    <span>${whisky.price}</span>
                  </div>
                  <Separator className="mt-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
            <Wine className="h-8 w-8" />
            Wine List
          </h2>
          <Card>
            <CardContent className="pt-6">
              {wineList.map((wine) => (
                <div key={wine.name} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{wine.name}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {wine.region}
                      </span>
                    </div>
                    <span>${wine.price}</span>
                  </div>
                  <Separator className="mt-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Menu;