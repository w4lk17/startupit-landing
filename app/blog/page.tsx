
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog-data";

export default async function BlogPage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />

      <div className="container relative py-24 lg:py-32">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
            "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent",
            "animate-fade-in"
          )}>
            Blog & Actualités
          </h1>
          <p className={cn(
            "mt-6 text-lg text-muted-foreground",
            "animate-slide-up [animation-delay:150ms]"
          )}>
            Découvrez nos derniers articles, guides et actualités sur l&apos;IT et l&apos;innovation.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.map(post => (
          <div 
            key={post.id}
            className={cn(
              "mt-16 overflow-hidden rounded-2xl border bg-background/50 shadow-lg",
              "animate-slide-up [animation-delay:250ms]"
            )}
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {post.category}
                  </span>
                  <time className="text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </time>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{post.readTime} de lecture</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="mt-8 group" variant="outline" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Lire l&apos;article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Recent Posts Grid */}
        <div className={cn(
          "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
          "animate-slide-up [animation-delay:350ms]"
        )}>
          {allPosts.filter(post => !post.featured).map(post => (
            <article
              key={post.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-background/50"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                      {post.category}
                    </span>
                    <time className="text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-muted-foreground">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">{post.readTime}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}