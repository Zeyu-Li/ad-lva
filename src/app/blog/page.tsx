import BlogCard from "~/app/_components/common/BlogCard";
import { getBlogPosts } from "~/app/_components/constants/blogPosts";

export default function BlogIndex() {
  const blogPosts = getBlogPosts();

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Welcome to our blog. Here you&apos;ll find the latest posts and
          updates about LVA microsurgery and Alzheimer&apos;s treatment.
        </p>
      </header>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.href}
              title={post.title}
              description={post.description}
              href={post.href}
              image={post.image}
              publishedOn={post.publishedOn}
              readTime={post.readTime}
            />
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts found. Check back later for updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
