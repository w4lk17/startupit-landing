import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Fonctionnalités", href: "/#features" },
  { name: "Prix", href: "/#pricing" },
  { name: "Témoignages", href: "/#testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-2 transition-opacity hover:opacity-80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "rounded-md"
            )}
            aria-label="StartupIT - Retour à l'accueil"
          >
            <Mountain className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="hidden font-bold sm:inline-block">
              StartupIT
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  "text-muted-foreground hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "rounded-md px-2 py-1"
                )}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            size="sm" 
            className={cn(
              "hidden md:inline-flex",
              "animate-fade-in",
              "hover:opacity-90 transition-opacity"
            )}
            aria-label="Commencer maintenant"
            asChild
          >
            <Link href="/signup">
              Commencer
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}