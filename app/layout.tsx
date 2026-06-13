import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FORMA LIVING | Furniture That Outlives Trends",
  description: "Handcrafted furniture studio blending Scandinavian minimalism with warm, tactile luxury.",
  openGraph: {
    title: "FORMA LIVING",
    description: "Furniture That Outlives Trends. Handcrafted in Scandinavia.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%231C1410' font-family='sans-serif'>F</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-forma-bg text-forma-text font-sans flex flex-col selection:bg-forma-sage/30 selection:text-forma-text">
        {children}
      </body>
    </html>
  );
}
