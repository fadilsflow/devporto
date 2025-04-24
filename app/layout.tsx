import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// import { Dockx } from "@/components/dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wahyu Akhmad Fadillah",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <TooltipProvider>
            {/* <Navbar /> */}
            <main className="mx-auto px-4 md:px-6 py-12 max-w-3xl ">
              {children}
              <Footer />
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
