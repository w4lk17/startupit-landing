import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: "0",
    description: "Parfait pour démarrer et explorer nos fonctionnalités essentielles.",
    features: [
      "Jusqu&apos;à 5 utilisateurs",
      "Stockage 5 Go",
      "Support par email",
      "Mises à jour de sécurité",
      "Accès API basique",
    ],
    cta: "Commencer gratuitement",
    href: "#start",
  },
  {
    name: "Pro",
    id: "pro",
    price: "49",
    description: "Idéal pour les équipes en croissance nécessitant plus de puissance.",
    features: [
      "Jusqu&apos;à 20 utilisateurs",
      "Stockage 50 Go",
      "Support prioritaire 24/7",
      "Analyses avancées",
      "API complète",
      "Intégrations premium",
      "Backup automatique",
    ],
    cta: "Commencer l'essai",
    href: "#pro",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "199",
    description: "Solution personnalisée pour les grandes entreprises.",
    features: [
      "Utilisateurs illimités",
      "Stockage illimité",
      "Support dédié 24/7",
      "Déploiement personnalisé",
      "API illimitée",
      "Toutes les intégrations",
      "Conformité avancée",
      "SLA garanti",
    ],
    cta: "Contacter l'équipe",
    href: "/contact",
  },
];

export default function Pricing() {
  return (
    <section 
      id="pricing" 
      className="relative border-t"
      aria-labelledby="pricing-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
      
      <div className="container relative py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 
            id="pricing-heading"
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
              "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
              "animate-fade-in"
            )}
          >
            Des tarifs simples et transparents
          </h2>
          <p className={cn(
            "mt-6 text-lg text-muted-foreground",
            "animate-slide-up [animation-delay:150ms]"
          )}>
            Choisissez le plan qui correspond à vos besoins. 
            Tous nos plans incluent une période d&apos;essai de 14 jours.
          </p>
        </div>

        <div className={cn(
          "mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3",
          "animate-slide-up [animation-delay:250ms]"
        )}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative rounded-2xl border bg-background p-8",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                tier.mostPopular && "border-primary/50 shadow-lg"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32">
                  <div className={cn(
                    "rounded-full bg-primary px-3 py-1 text-center text-sm font-medium text-primary-foreground",
                    "animate-bounce [animation-iteration-count:3]"
                  )}>
                    Plus populaire
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold">{tier.price}€</span>
                  <span className="ml-1 text-sm text-muted-foreground">/mois</span>
                </div>
              </div>

              <ul role="list" className="mb-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full",
                  tier.mostPopular ? "bg-primary" : "bg-primary/90"
                )}
                asChild
              >
                <a href={tier.href}>{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className={cn(
          "mt-12 text-center text-sm text-muted-foreground",
          "animate-fade-in [animation-delay:350ms]"
        )}>
          Tous les prix sont en euros (EUR) et hors taxes applicables.
          <br />
          Besoin d&apos;une solution personnalisée ? {" "}
          <a 
            href="/contact" 
            className="font-medium text-primary hover:text-primary/80"
          >
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
}