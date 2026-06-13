export interface Product {
  id: string;
  name: string;
  material: string;
  category: string;
  price: string;
  primaryImage: string;
  secondaryImage: string;
  dimensions: string;
  leadTime: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Aros Sofa",
    material: "Linen & Walnut",
    category: "Seating",
    price: "3,490",
    primaryImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "W 96\" x D 38\" x H 30\"",
    leadTime: "8-10 weeks"
  },
  {
    id: "2",
    name: "Larsen Dining Table",
    material: "Solid Oak",
    category: "Tables",
    price: "2,850",
    primaryImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "L 84\" x W 40\" x H 29\"",
    leadTime: "6-8 weeks"
  },
  {
    id: "3",
    name: "Koti Armchair",
    material: "Bouclé & Steel",
    category: "Seating",
    price: "1,290",
    primaryImage: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "W 32\" x D 34\" x H 31\"",
    leadTime: "In Stock"
  },
  {
    id: "4",
    name: "Venn Bookshelf",
    material: "Walnut & Brass",
    category: "Storage",
    price: "2,100",
    primaryImage: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "W 60\" x D 14\" x H 72\"",
    leadTime: "4-6 weeks"
  },
  {
    id: "5",
    name: "Aura Bed Frame",
    material: "Ash Wood",
    category: "Bedroom",
    price: "3,150",
    primaryImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "King / Queen",
    leadTime: "8-10 weeks"
  },
  {
    id: "6",
    name: "Sola Coffee Table",
    material: "Travertine & Oak",
    category: "Tables",
    price: "1,600",
    primaryImage: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800&h=1000",
    secondaryImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800&h=1000",
    dimensions: "Dia 40\" x H 15\"",
    leadTime: "In Stock"
  }
];
