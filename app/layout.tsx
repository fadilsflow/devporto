import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "./config/seo";
import { defaultViewport } from "./config/viewport";
import AnimatedContainer from "@/components/animate-container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = defaultMetadata;
export const viewport = defaultViewport;

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
        <ThemeProvider attribute="class"             defaultTheme="dark" disableTransitionOnChange>
          <AnimatedContainer>
          <main className="px-4 md:px-6 py-12 max-w-3xl mx-auto">
            {children}
            <Toaster position="top-center" />
            <Footer />
          </main>
          </AnimatedContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
