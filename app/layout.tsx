import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import Header from "@/app/components/landing/Header";
import Footer from "@/app/components/landing/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

// Better SEO and metadata
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "StartupIT - Solutions Innovantes",
  description: "Découvrez nos solutions innovantes pour votre entreprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="fr" 
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "selection:bg-primary selection:text-primary-foreground",
          "scroll-smooth",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4">
              Aller au contenu principal
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}