import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar  from "@/components/Navbar"; // Import your new Navbar
import { Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Portfolio | Enterprise Solutions",
  description: "Full-stack software and business management suite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  <link rel="preload" href="/fonts/inter_bold.json" as="fetch" crossOrigin="anonymous" />
</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* PLACE NAVBAR HERE */}
          <Navbar /> 
          
          <main>
            {children}
          </main>
          
          {/* You could also add a <Footer /> here later */}
        </ThemeProvider>
      </body>
    </html>
  );
}