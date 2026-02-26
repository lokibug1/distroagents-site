import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, strategies, and updates on AI-powered wholesale distribution from the DistroAgents team.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] bg-purple-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.08] tracking-tight mb-5">
            Blog
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Insights, strategies, and updates on AI-powered wholesale distribution.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-slate-300 text-lg mb-3">
                No blog posts yet. Check back soon!
              </p>
              <p className="text-slate-500 text-[14px]">
                Our AI agent pipeline will be publishing content here automatically.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl glass overflow-hidden transition-all duration-300 hover:glow-sm hover:-translate-y-[2px]"
                >
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-[12px] text-slate-500 mb-4">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-[14px] text-slate-400 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[12px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
