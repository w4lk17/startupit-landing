"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowLeft, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { ContactFormData, contactFormSchema } from "@/lib/validations/forms";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    description: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
    ariaLabel: "Appeler notre service client",
  },
  {
    icon: Mail,
    title: "Email",
    description: "contact@startupit.com",
    href: "mailto:contact@startupit.com",
    ariaLabel: "Envoyer un email à notre service client",
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "123 Avenue de l'Innovation, 75001 Paris",
    href: "https://maps.google.com",
    ariaLabel: "Voir notre adresse sur Google Maps",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [charCount, setCharCount] = useState(0);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = form;

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      form.reset();
      setCharCount(0);
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

      <div className="relative py-24 lg:py-32">
        {/* Back Button */}
        <div className="container mb-8">
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

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
            "animate-fade-in"
          )}>
            Contactez-nous
          </h1>
          <p className={cn(
            "mt-6 text-lg text-muted-foreground",
            "animate-slide-up [animation-delay:150ms]"
          )}>
            Une question ? Un projet ? Notre équipe est là pour vous aider.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className={cn(
              "rounded-2xl border bg-background/50 p-8",
              "animate-slide-up [animation-delay:250ms]"
            )}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">
                      Prénom <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      placeholder="John"
                      {...register("firstname")}
                      aria-describedby={errors.firstname ? "firstname-error" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.firstname && (
                      <p id="firstname-error" className="text-sm text-destructive">
                        {errors.firstname.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">
                      Nom <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      placeholder="Doe"
                      {...register("lastname")}
                      aria-describedby={errors.lastname ? "lastname-error" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.lastname && (
                      <p id="lastname-error" className="text-sm text-destructive">
                        {errors.lastname.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
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
                  <Label htmlFor="subject">
                    Sujet <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Comment pouvons-nous vous aider ?"
                    {...register("subject")}
                    aria-describedby={errors.subject ? "subject-error" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[150px] resize-none"
                    {...register("message")}
                    onChange={(e) => {
                      register("message").onChange(e);
                      setCharCount(e.target.value.length);
                    }}
                    aria-describedby={errors.message ? "message-error" : ""}
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{charCount}/1000 caractères</span>
                    {errors.message && (
                      <p id="message-error" className="text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={cn(
                      "flex items-start gap-4 rounded-2xl border bg-background/50 p-6",
                      "animate-slide-up",
                      `[animation-delay:${350 + index * 100}ms]`
                    )}
                  >
                    <div className="rounded-full bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                          aria-label={item.ariaLabel}
                        >
                          {item.description}
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Additional Information */}
              <div className={cn(
                "rounded-2xl border bg-background/50 p-6",
                "animate-slide-up [animation-delay:650ms]"
              )}>
                <h3 className="font-semibold">Horaires d&apos;ouverture</h3>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi - Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}