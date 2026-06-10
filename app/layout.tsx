import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AS Logistics | Moving India Forward | Premium Transport Solutions",
  description: "AS Logistics is India's premium logistics and transport partner. Specializing in Full Truck Load (FTL), Express Delivery, Part Load, and dedicated supply chain services nationwide.",
  keywords: "AS Logistics, Logistics India, Trucking, Transport Services India, Cargo, Full Truck Load, Express Delivery, supply chain, Alok Sharma",
  openGraph: {
    title: "AS Logistics | Moving India Forward",
    description: "Reliable logistics and transport solutions connecting businesses across India. Cinematic shipping experience.",
    type: "website",
    locale: "en_IN",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

