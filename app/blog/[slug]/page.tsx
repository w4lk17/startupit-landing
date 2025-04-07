"use server";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { allBlogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = await Promise.resolve(params.slug);
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article non trouvé" };
  }

  // Generate OG image URL
  const ogUrl = new URL('/api/og', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000');
  ogUrl.searchParams.set('title', post.title);
  ogUrl.searchParams.set('category', post.category);
  ogUrl.searchParams.set('author', post.author.name);

  return {
    title: `${post.title} - Blog StartupIT`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Ensure params is awaited
  const slug = await Promise.resolve(params.slug);
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />

      <div className="container relative py-12 lg:py-20">
        <Button
          variant="ghost"
          className="mb-8 group"
          asChild
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Retour au blog
          </Link>
        </Button>

        <article className="mx-auto max-w-3xl">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                {post.category}
              </span>
              <time className="text-muted-foreground">{formattedDate}</time>
              <span className="text-muted-foreground">{post.readTime} de lecture</span>
            </div>

            <h1 className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
              "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            )}>
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              {post.description}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div
            className={cn(
              "prose dark:prose-invert max-w-none",
              "prose-headings:scroll-mt-20",
              "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
              "prose-img:rounded-lg"
            )}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <aside className="mx-auto mt-20 max-w-5xl">
            <h2 className="mb-8 text-2xl font-bold">Articles similaires</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-background/50"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                        {relatedPost.category}
                      </span>
                      <span className="text-muted-foreground">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-semibold group-hover:underline">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}