import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AppContextProvider from "@/context/AppContext";
import Footer from "@/components/Footer";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TouristBD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
