import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DecapCMS Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            A modern blog powered by DecapCMS and Next.js
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/admin"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Admin Panel
            </Link>
            <Link
              href="/about"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              About
            </Link>
          </div>
        </header>

        <main>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Latest Posts
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No posts yet. Create your first post in the admin panel!
              </p>
              <Link
                href="/admin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                    {post.content.substring(0, 150)}...
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
