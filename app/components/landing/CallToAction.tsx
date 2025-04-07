import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  "Essai gratuit de 14 jours",
  "Installation rapide",
  "Support premium inclus",
];

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
      
      <div className="container relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
            "animate-fade-in"
          )}>
            Prêt à transformer votre workflow IT ?
          </h2>
          
          <p className={cn(
            "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
            "animate-slide-up [animation-delay:150ms]"
          )}>
            Commencez dès aujourd&apos;hui et découvrez comment notre solution peut 
            optimiser vos processus, renforcer votre sécurité et booster votre productivité.
          </p>

          <div className={cn(
            "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
            "animate-slide-up [animation-delay:250ms]"
          )}>
            <Button 
              size="lg" 
              className="group min-w-[200px]"
              asChild
            >
              <Link href="/signup">
                Démarrer maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group min-w-[200px]"
              asChild
            >
              <Link href="/contact">
                Contacter l&apos;équipe
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className={cn(
            "mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4",
            "animate-fade-in [animation-delay:350ms]"
          )}>
            {features.map((feature) => (
              <div 
                key={feature} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}