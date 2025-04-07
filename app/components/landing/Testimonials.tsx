import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"; // Pour les étoiles de notation

const testimonials = [
  {
    name: "Alice Dubois",
    title: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=1", // Image placeholder
    quote: "StartupIT a transformé notre manière de travailler. Leur plateforme est intuitive, puissante et le support est exceptionnel !",
    rating: 5,
  },
  {
    name: "Bob Martin",
    title: "Développeur Principal, Solutions Agiles",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "Enfin une solution qui comprend les besoins réels des équipes IT. La scalabilité est impressionnante.",
    rating: 5,
  },
  {
    name: "Claire Petit",
    title: "Chef de Projet, Digitalis",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "La mise en place a été rapide et les résultats immédiats. Je recommande vivement.",
    rating: 4,
  },
];

// Helper pour afficher les étoiles
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"
      }`}
    />
  ));
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ce que nos clients disent
        </h2>
        <p className="mt-3 max-w-[600px] mx-auto text-muted-foreground md:text-xl">
          Découvrez pourquoi les leaders de l&apos;industrie nous font confiance.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
               <Avatar className="h-12 w-12">
                 <AvatarImage src={testimonial.image} alt={testimonial.name} />
                 <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
               </Avatar>
               <div>
                 <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                 <p className="text-sm text-muted-foreground">{testimonial.title}</p>
               </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <blockquote className="text-base italic text-foreground/80">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="mt-4 flex items-center">
                {renderStars(testimonial.rating)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}