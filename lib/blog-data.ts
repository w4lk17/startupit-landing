export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  author: {
    name: string;
    image: string;
    role: string;
  };
  tags: string[];
}

export const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "optimiser-workflow-it-2024",
    title: "Comment optimiser votre workflow IT en 2024",
    description: "Découvrez les meilleures pratiques et outils pour améliorer l'efficacité de votre équipe IT.",
    content: `
      <p>L'optimisation du workflow IT est devenue un enjeu majeur pour les entreprises en 2024. Dans cet article, nous explorons les meilleures pratiques et outils qui peuvent transformer votre approche.</p>
      
      <h2>1. Automatisation des tâches répétitives</h2>
      <p>L'automatisation est la clé pour libérer du temps précieux et réduire les erreurs humaines. Voici quelques domaines où l'automatisation peut faire la différence :</p>
      <ul>
        <li>Déploiement de code</li>
        <li>Tests automatisés</li>
        <li>Monitoring et alertes</li>
        <li>Backups et maintenance</li>
      </ul>

      <h2>2. Adoption des pratiques DevOps</h2>
      <p>Les pratiques DevOps continuent d'évoluer et de démontrer leur valeur. Les points clés incluent :</p>
      <ul>
        <li>Intégration continue (CI)</li>
        <li>Déploiement continu (CD)</li>
        <li>Infrastructure as Code</li>
        <li>Monitoring en temps réel</li>
      </ul>

      <h2>3. Outils collaboratifs modernes</h2>
      <p>La collaboration est essentielle pour une équipe IT performante. Les outils modernes facilitent :</p>
      <ul>
        <li>Communication en temps réel</li>
        <li>Partage de documents</li>
        <li>Gestion de projet agile</li>
        <li>Suivi des incidents</li>
      </ul>
    `,
    image: "/blog/workflow-optimization.png",
    date: "2024-04-04",
    category: "Productivité",
    readTime: "5 min",
    featured: true,
    author: {
      name: "Marie Dubois",
      image: "https://i.pravatar.cc/150?img=5",
      role: "Lead DevOps"
    },
    tags: ["DevOps", "Automatisation", "Productivité", "Outils"]
  },
  {
    id: 2,
    slug: "securite-it-tendances",
    title: "Sécurité IT : Les tendances à suivre",
    description: "Les dernières innovations en matière de cybersécurité pour protéger votre entreprise.",
    content: `
      <p>La sécurité IT évolue rapidement face aux nouvelles menaces. Découvrez les tendances clés pour protéger votre infrastructure.</p>
      
      <h2>1. Zero Trust Security</h2>
      <p>Le modèle Zero Trust devient la norme...</p>

      <h2>2. Intelligence Artificielle en Cybersécurité</h2>
      <p>L'IA révolutionne la détection des menaces...</p>
    `,
    image: "/blog/security-trends.png",
    date: "2024-04-02",
    category: "Sécurité",
    readTime: "4 min",
    author: {
      name: "Thomas Martin",
      image: "https://i.pravatar.cc/150?img=7",
      role: "Expert Cybersécurité"
    },
    tags: ["Sécurité", "Cybersécurité", "Zero Trust", "IA"]
  },
  {
    id: 3,
    slug: "impact-ia-it-moderne",
    title: "L'impact de l'IA sur l'IT moderne",
    description: "Comment l'intelligence artificielle transforme la gestion IT et les opportunités à saisir.",
    content: `
      <p>L'IA révolutionne la façon dont nous gérons l'infrastructure IT...</p>
      
      <h2>1. Automatisation intelligente</h2>
      <p>L'IA permet une automatisation plus sophistiquée...</p>

      <h2>2. Analyse prédictive</h2>
      <p>Anticipez les problèmes avant qu'ils ne surviennent...</p>
    `,
    image: "/blog/ai-impact.png",
    date: "2024-04-01",
    category: "Innovation",
    readTime: "6 min",
    author: {
      name: "Sophie Bernard",
      image: "https://i.pravatar.cc/150?img=15",
      role: "Architecte Solutions"
    },
    tags: ["IA", "Innovation", "Automatisation", "Analyse"]
  }
];

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return allBlogPosts.find(post => post.slug === slug);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return allBlogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return allBlogPosts.filter(post => post.featured);
}

export async function getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
  return allBlogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}