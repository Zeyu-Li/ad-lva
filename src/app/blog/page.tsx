import Link from "next/link";

export default function BlogIndex() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Welcome to our blog. Here you&apos;ll find the latest posts and
          updates.
        </p>
      </header>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Latest Posts
        </h2>

        <div className="space-y-6">
          <article className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg dark:border-gray-700">
            <h3 className="mb-2 text-xl font-semibold">
              <Link
                href="/blog/test"
                className="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Welcome to Our Blog
              </Link>
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              An introduction to our blog system powered by Next.js and MDX.
              Learn about the features and capabilities of our content platform.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              Published: Test Post
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
