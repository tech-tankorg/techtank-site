import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "@/app/styles/global.css";

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
      <body className="pt-18 sm:pt-0" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
