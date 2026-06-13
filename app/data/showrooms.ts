export interface Showroom {
  id: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  mapsQuery: string;
}

export const showrooms: Showroom[] = [
  {
    id: "cph",
    city: "Copenhagen",
    address: "Strøget 45, 1160 København",
    hours: "Mon-Sat: 10am - 6pm",
    phone: "+45 33 12 34 56",
    mapsQuery: "Strøget 45, 1160 København"
  },
  {
    id: "ldn",
    city: "London",
    address: "15 Redchurch St, Shoreditch",
    hours: "Mon-Sat: 10am - 7pm",
    phone: "+44 20 7123 4567",
    mapsQuery: "15 Redchurch St, London"
  },
  {
    id: "nyc",
    city: "New York",
    address: "101 Spring St, Soho",
    hours: "Mon-Sun: 11am - 7pm",
    phone: "+1 212-555-0199",
    mapsQuery: "101 Spring St, New York"
  }
];
