import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/globals.css";



export const metadata: Metadata = {
  title: "TechTank TO",
  description: "Welcome to TechTank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="pt-18 sm:pt-0"
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
