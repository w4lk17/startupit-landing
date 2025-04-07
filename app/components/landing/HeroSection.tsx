import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  "Performance optimisée",
  "Sécurité renforcée",
  "Support 24/7",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
      
      <div className="container relative flex flex-col items-center justify-center py-24 md:py-32 lg:py-40">
        <div className="animate-fade-in space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border bg-background/95 px-3 py-1 text-sm backdrop-blur">
            🚀 <span className="ml-2">Découvrez notre nouvelle plateforme</span>
          </div>
          
          <h1 className={cn(
            "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl",
            "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
            "animate-slide-up [animation-delay:150ms]"
          )}>
            Révolutionnez Votre<br />
            Workflow IT
          </h1>
          
          <p className={cn(
            "mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl",
            "animate-slide-up [animation-delay:250ms]"
          )}>
            Notre solution innovante simplifie la gestion de vos processus IT, 
            booste votre productivité et sécurise vos données. Découvrez le futur 
            de la transformation digitale.
          </p>

          <div className={cn(
            "mx-auto mt-6 flex max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center",
            "animate-slide-up [animation-delay:350ms]"
          )}>
            <Button 
              size="lg" 
              className="group"
              asChild
            >
              <Link href="/signup">
                Démarrer Gratuitement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              asChild
            >
              <Link href="#features">
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className={cn(
            "mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground",
            "animate-fade-in [animation-delay:450ms]"
          )}>
            {features.map((feature) => (
              <div 
                key={feature}
                className="inline-flex items-center gap-2"
              >
                <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className={cn(
          "relative mt-16 w-full max-w-5xl animate-fade-in [animation-delay:550ms]",
          "rounded-lg border bg-gradient-to-b from-background/50 to-background p-2"
        )}>
          <Image
            src="/dashboard-preview.jpg"
            alt="Aperçu du tableau de bord StartupIT"
            width={2880}
            height={1620}
            className="rounded shadow-2xl"
            priority
          />
          
          {/* Reflection effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background via-background/50 to-transparent opacity-40" />
        </div>
      </div>
    </section>
  );
}