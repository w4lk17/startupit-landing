"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowLeft, Github, Loader2, Check } from "lucide-react";
import { SignupFormData, signupFormSchema, passwordRequirements } from "@/lib/validations/forms";
import { useToast } from "@/components/ui/use-toast";

export default function SignUpPage() {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = form;
  const watchPassword = watch("password");

  const checkPasswordRequirement = (requirement: { regex: RegExp }) => {
    return requirement.regex.test(watchPassword || "");
  };

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Compte créé !",
        description: "Vous pouvez maintenant vous connecter.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  return (
    <div className="container relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />

      <div className="relative grid min-h-screen grid-cols-1 gap-20 lg:grid-cols-2">
        {/* Left side - Form */}
        <div className="flex flex-col items-center justify-center py-8 md:py-12">
          {/* Back Button */}
          <div className="mb-8 w-full max-w-sm">
            <Button
              variant="ghost"
              className="group"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Retour à l&apos;accueil
              </Link>
            </Button>
          </div>

          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-2 text-center">
              <h1 className={cn(
                "text-3xl font-bold tracking-tight",
                "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              )}>
                Créer un compte
              </h1>
              <p className="text-muted-foreground">
                Entrez vos informations ci-dessous pour créer votre compte
              </p>
            </div>

            <div className="grid gap-4">
              <Button 
                variant="outline" 
                className="group relative"
                type="button"
                onClick={() => {
                  toast({
                    title: "GitHub",
                    description: "Connexion avec GitHub en cours de développement.",
                  });
                }}
              >
                <Github className="mr-2 h-4 w-4" />
                Continuer avec Github
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nom complet <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="name"
                  autoCorrect="off"
                  {...register("name")}
                  aria-describedby={errors.name ? "name-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register("email")}
                  aria-describedby={errors.email ? "email-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">
                  Mot de passe <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  aria-describedby={errors.password ? "password-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <p id="password-error" className="text-sm text-destructive">
                    {errors.password.message}
                  </p>
                )}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Le mot de passe doit contenir :
                  </p>
                  <ul className="text-sm space-y-1">
                    {passwordRequirements.map((requirement) => (
                      <li
                        key={requirement.id}
                        className={cn(
                          "flex items-center gap-2",
                          checkPasswordRequirement(requirement)
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {checkPasswordRequirement(requirement) ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border" />
                        )}
                        {requirement.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                  Confirmer le mot de passe <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  aria-describedby={errors.confirmPassword ? "confirm-password-error" : ""}
                  disabled={isSubmitting}
                />
                {errors.confirmPassword && (
                  <p id="confirm-password-error" className="text-sm text-destructive">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <Button 
                className="w-full" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Création du compte...
                  </>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </form>

            <div className="text-center text-sm">
              Vous avez déjà un compte?{" "}
              <Link 
                href="/login" 
                className="font-medium text-primary hover:text-primary/80"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="space-y-8">
            <div className="rounded-2xl border bg-background/50 p-8">
              <h2 className="text-2xl font-bold">Pourquoi nous choisir ?</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  Installation rapide et facile
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  Support technique 24/7
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  Mises à jour régulières
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  Sécurité de niveau entreprise
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-background/50 p-8">
              <div className="space-y-2">
                <h3 className="font-bold">Essai gratuit de 14 jours</h3>
                <p className="text-sm text-muted-foreground">
                  Testez toutes nos fonctionnalités sans engagement. 
                  Aucune carte de crédit requise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}