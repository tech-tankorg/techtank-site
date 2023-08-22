import "../dist/output.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={rubik.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
