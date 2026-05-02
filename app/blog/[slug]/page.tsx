import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { MarkdownLink } from "@/components/MarkdownLink";
import { getBlogPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || translatedSlug === post.slug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/blog" className="text-sm text-slate-600 hover:underline">
        Retour au blog
      </Link>

      <article className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {post.h1 || post.seo_title || post.slug}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {post.published_at
            ? new Date(post.published_at).toLocaleDateString("fr-FR")
            : "Date inconnue"}
        </p>

        {post.cover?.file_url && (
          <div className="mt-6 overflow-hidden rounded-lg">
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || post.h1 || post.seo_title || ""}
              width={1200}
              height={630}
              priority
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-slate mt-8 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
            {post.body_md || post.excerpt || ""}
          </ReactMarkdown>
        </div>

        {post.author && (
          <div className="mt-12 flex items-center gap-4 border-t pt-8">
            {post.author.avatar_url ? (
              <Image
                src={post.author.avatar_url}
                alt={post.author.name || "Auteur"}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-slate-600">
                {post.author.name?.charAt(0).toUpperCase() || "A"}
              </div>
            )}
            <div>
              <p className="font-semibold text-slate-900">{post.author.name}</p>
              {post.author.bio && (
                <p className="mt-1 text-sm text-slate-500">{post.author.bio}</p>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
