"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"

const navigation = [
  { name: "Fonctionnalités", href: "/#features" },
  { name: "Prix", href: "/#pricing" },
  { name: "Témoignages", href: "/#testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  // Close menu when clicking anchor links
  const handleAnchorClick = React.useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "mr-2 px-0 text-base md:hidden",
            "hover:bg-transparent focus-visible:bg-transparent",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className={cn(
          "w-full sm:w-80 p-6",
          "flex flex-col"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <MobileLink
            href="/"
            className={cn(
              "flex items-center gap-2",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "rounded-md"
            )}
            onOpenChange={setOpen}
            aria-label="StartupIT - Retour à l'accueil"
          >
            <Mountain className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-bold">StartupIT</span>
          </MobileLink>
        </div>

        <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation principale du site avec accès aux fonctionnalités, prix, témoignages et blog
        </SheetDescription>

        <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
          {navigation.map((item) => (
            <MobileLink 
              key={item.name}
              href={item.href}
              onOpenChange={setOpen}
              className={cn(
                "text-lg font-medium transition-colors",
                "text-muted-foreground hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "rounded-md px-2 py-1",
                "animate-fade-in"
              )}
              onClick={item.href.startsWith('#') ? handleAnchorClick : undefined}
            >
              {item.name}
            </MobileLink>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <Button 
            onClick={() => setOpen(false)} 
            className={cn(
              "w-full",
              "animate-fade-in",
              "hover:opacity-90 transition-opacity"
            )}
            size="lg"
            asChild
          >
            <Link href="/signup">
              Commencer
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  onClick,
  ...props
}: MobileLinkProps) {
  const handleClick = React.useCallback(() => {
    onClick?.()
    onOpenChange?.(false)
  }, [onClick, onOpenChange])

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}