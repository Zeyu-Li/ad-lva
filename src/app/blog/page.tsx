import BlogCard from "~/app/_components/common/BlogCard";

export default function BlogIndex() {
  const blogPosts = [
    {
      title: "Welcome to Our Blog",
      description:
        "An introduction to our blog system powered by Next.js and MDX. Learn about the features and capabilities of our content platform.",
      href: "/blog/test",
      image: "/hero.jpg",
      publishedDate: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "Understanding LVA Microsurgery",
      description:
        "Discover the revolutionary LVA microsurgery technique and how it&apos;s changing the landscape of Alzheimer&apos;s treatment.",
      href: "/blog/lva-microsurgery",
      image: "/research1.png",
      publishedDate: "Jan 10, 2025",
      readTime: "8 min read",
    },
    {
      title: "Patient Success Stories",
      description:
        "Real stories from patients who have undergone LVA microsurgery and their journey to recovery.",
      href: "/blog/success-stories",
      image: "/person3.png",
      publishedDate: "Jan 5, 2025",
      readTime: "6 min read",
    },
    {
      title: "Latest Research Findings",
      description:
        "Explore the latest research and clinical trials that are advancing our understanding of Alzheimer&apos;s treatment.",
      href: "/blog/research-findings",
      image: "/hero.jpg",
      publishedDate: "Dec 28, 2024",
      readTime: "12 min read",
    },
    {
      title: "Treatment Guidelines & FAQs",
      description:
        "Comprehensive guide to LVA treatment procedures, what to expect, and frequently asked questions.",
      href: "/blog/treatment-guide",
      image: "/research1.png",
      publishedDate: "Dec 20, 2024",
      readTime: "10 min read",
    },
    {
      title: "The Science Behind LVA",
      description:
        "Deep dive into the scientific principles and mechanisms that make LVA microsurgery effective for Alzheimer&apos;s treatment.",
      href: "/blog/science-behind-lva",
      image: "/hero.jpg",
      publishedDate: "Dec 15, 2024",
      readTime: "15 min read",
    },
  ];

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

      <section>
        <h2 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Latest Posts
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.href}
              title={post.title}
              description={post.description}
              href={post.href}
              image={post.image}
              publishedDate={post.publishedDate}
              readTime={post.readTime}
              delay={index * 150} // Staggered animation
            />
          ))}
        </div>
      </section>
    </div>
  );
}
