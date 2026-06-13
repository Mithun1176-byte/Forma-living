export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The craftsmanship is unparalleled. Our dining room feels completely transformed by the warmth of the oak. It's truly a piece that will outlive trends.",
    name: "Elena R.",
    city: "Brooklyn, NY",
    product: "Larsen Dining Table"
  },
  {
    id: "2",
    quote: "Minimalist yet inviting. The Aros sofa strikes the perfect balance between sculptural form and everyday comfort.",
    name: "Marcus T.",
    city: "London, UK",
    product: "The Aros Sofa"
  },
  {
    id: "3",
    quote: "I was hesitant to order a bed frame online, but the quality of the Aura exceeded all expectations. The ash wood grain is stunning.",
    name: "Sarah M.",
    city: "Austin, TX",
    product: "Aura Bed Frame"
  },
  {
    id: "4",
    quote: "A beautiful addition to my home office. The bookshelf feels sturdy and refined, and the brass detailing elevates the whole room.",
    name: "James C.",
    city: "Chicago, IL",
    product: "Venn Bookshelf"
  }
];
