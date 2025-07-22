import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  description: string;
  href: string;
  image: string;
  publishedOn: string;
  readTime: string;
  isPublished?: boolean;
}

interface MDXFrontmatter {
  title: string;
  description: string;
  isPublished: boolean;
  image: string;
  publishedOn: string;
}

// Calculate estimated read time based on content length
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Server-side function to get all blog posts dynamically from MDX files
export function getBlogPosts(): BlogPost[] {
  // Only run on server-side
  if (typeof window !== "undefined") {
    return [];
  }

  const blogDirectory = path.join(process.cwd(), "src/app/blog");

  try {
    // Get all directories in the blog folder (excluding layout.tsx and page.tsx)
    const blogDirs = fs
      .readdirSync(blogDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    const blogPosts: BlogPost[] = [];

    for (const dir of blogDirs) {
      const mdxPath = path.join(blogDirectory, dir, "page.mdx");

      // Check if page.mdx exists in the directory
      if (fs.existsSync(mdxPath)) {
        try {
          const fileContent = fs.readFileSync(mdxPath, "utf8");
          const { data: frontmatter, content } = matter(fileContent);

          const typedFrontmatter = frontmatter as MDXFrontmatter;

          // Only include published posts
          if (typedFrontmatter.isPublished) {
            const blogPost: BlogPost = {
              title: typedFrontmatter.title,
              description: typedFrontmatter.description,
              href: `/blog/${dir}`,
              image: typedFrontmatter.image.startsWith("/")
                ? typedFrontmatter.image
                : `/${typedFrontmatter.image}`,
              publishedOn: new Date(
                typedFrontmatter.publishedOn,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              readTime: calculateReadTime(content),
              isPublished: typedFrontmatter.isPublished,
            };

            blogPosts.push(blogPost);
          }
        } catch (error) {
          console.warn(`Error processing blog post ${dir}:`, error);
        }
      }
    }

    // Sort by publishedOn date (newest first)
    return blogPosts.sort((a, b) => {
      const dateA = new Date(a.publishedOn);
      const dateB = new Date(b.publishedOn);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.warn("Error reading blog directory:", error);
    return [];
  }
}

// Fallback static posts for development/client-side usage
const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    title: "Test",
    description: "Test article",
    href: "/blog/test",
    image: "/hero.jpg",
    publishedOn: "Apr 21, 2025",
    readTime: "2 min read",
    isPublished: true,
  },
  {
    title: "Nature",
    description: "nature article",
    href: "/blog/nature",
    image: "/hero.jpg",
    publishedOn: "Apr 20, 2025",
    readTime: "1 min read",
    isPublished: true,
  },
];

// Export that works for both server and client
export const BLOG_POSTS: BlogPost[] =
  typeof window === "undefined" ? getBlogPosts() : FALLBACK_BLOG_POSTS;
