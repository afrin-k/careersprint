import type { Metadata } from "next";
import { Montserrat, PT_Serif } from "next/font/google";
import "./globals.css";

const montserrat=Montserrat({subsets:['latin'],variable:'--font-montserrat',display:'swap'})
const ptserif=PT_Serif({weight:'700',subsets:['latin'],variable:'--font-pt-serif',display:'swap'})

export const metadata: Metadata = {
  title: "CareerSprint | Win the Race",
  description: "Your one-stop-shop for holistic placement preparations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ptserif.variable}`}>
      <head><link rel="icon" href="/favicon.ico" sizes="any"/></head> 
      <body>
        {children}
      </body>
    </html>
  );
}
