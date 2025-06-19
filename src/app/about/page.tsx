import Link from "next/link";
import { getPageBySlug } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

export const metadata = {
  title: "About",
  description: "Learn more about this blog",
};

export default function AboutPage() {
  const page = getPageBySlug("about");

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </nav>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {page.title}
            </h1>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </div>
        </article>

        <nav className="mt-8 text-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-block"
          >
            ← Back to Home
          </Link>
        </nav>
      </div>
    </div>
  );
}
