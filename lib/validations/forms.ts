import * as z from "zod";

export const contactFormSchema = z.object({
  firstname: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères"),
  lastname: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z.string()
    .email("Format d'email invalide")
    .min(5, "L'email est requis")
    .max(100, "L'email ne peut pas dépasser 100 caractères"),
  subject: z.string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(100, "Le sujet ne peut pas dépasser 100 caractères"),
  message: z.string()
    .min(20, "Le message doit contenir au moins 20 caractères")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

export const signupFormSchema = z.object({
  name: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z.string()
    .email("Format d'email invalide")
    .min(5, "L'email est requis")
    .max(100, "L'email ne peut pas dépasser 100 caractères"),
  password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .regex(/[^A-Za-z0-9]/, "Le mot de passe doit contenir au moins un caractère spécial"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SignupFormData = z.infer<typeof signupFormSchema>;

export const passwordRequirements = [
  { id: 'length', label: 'Au moins 8 caractères', regex: /.{8,}/ },
  { id: 'uppercase', label: 'Une majuscule', regex: /[A-Z]/ },
  { id: 'lowercase', label: 'Une minuscule', regex: /[a-z]/ },
  { id: 'number', label: 'Un chiffre', regex: /\d/ },
  { id: 'special', label: 'Un caractère spécial', regex: /[^A-Za-z0-9]/ },
]; 