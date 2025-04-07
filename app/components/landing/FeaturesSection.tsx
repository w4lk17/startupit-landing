import { Card } from "@/components/ui/card";
import { Zap, ShieldCheck, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Performance Éclair",
    description: "Optimisez vos processus avec une vitesse et une efficacité inégalées.",
    color: "text-yellow-500",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité Renforcée",
    description: "Protégez vos actifs critiques avec des mesures de sécurité de pointe.",
    color: "text-blue-500",
  },
  {
    icon: BarChart,
    title: "Analyses Intuitives",
    description: "Prenez des décisions éclairées grâce à des tableaux de bord clairs et précis.",
    color: "text-green-500",
  },
  // Ajoutez d'autres fonctionnalités
];

export default function FeaturesSection() {
  return (
    <section 
      id="features" 
      className="relative container py-16 md:py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10" />
      
      <div className="relative text-center space-y-4 mb-16">
        <h2 
          id="features-heading"
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          Pourquoi Choisir StartupIT ?
        </h2>
        <p className="mt-4 max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl">
          Découvrez les avantages clés qui nous distinguent.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index}
              className={cn(
                "group relative overflow-hidden",
                "transition-all duration-300 ease-in-out",
                "hover:shadow-lg hover:scale-[1.02]",
                "dark:bg-muted/5 dark:hover:bg-muted/10",
                "border border-muted-foreground/10"
              )}
            >
              <div className="flex flex-col items-center p-8 text-center">
                <div className={cn(
                  "p-3 rounded-full mb-6",
                  "bg-muted/50 dark:bg-muted/20",
                  "transition-transform duration-300 group-hover:scale-110"
                )}>
                  <Icon className={cn("h-8 w-8", feature.color)} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}