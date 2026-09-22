import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingShare from "@/components/FloatingShare";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Denoval Creative Designer",
  description: "Graphic design and visual creative services by Denoval.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        {children}
        <FloatingShare />
      </body>
    </html>
  );
}