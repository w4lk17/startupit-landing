import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    // Chemins corrects pour l'App Router et Shadcn
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Si vous avez aussi un dossier pages
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Composants Shadcn/ui
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Si votre code source est dans src/
    // Ajoutez d'autres chemins si nécessaire
	],
  prefix: "", // Pas de préfixe par défaut pour les classes Tailwind
  theme: {
    container: {
      center: true,
      padding: "1.5rem", // Ajustez le padding du container global si besoin
      screens: {
        "2xl": "1400px", // Point de rupture max-width pour le container
      },
    },
    extend: {
      // --- Couleurs définies par Shadcn/ui ---
      // Ces variables CSS (--background, --foreground, etc.) sont définies
      // dans votre fichier globals.css lors de l'init de Shadcn.
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // --- Rayon des bordures défini par Shadcn/ui ---
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // --- Animations définies par Shadcn/ui ---
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
     
    },
  },
  // Plugin requis pour les animations Shadcn/ui
  plugins: [animate,typography],
} satisfies Config // Utilisation de `satisfies Config` pour le type checking

export default config