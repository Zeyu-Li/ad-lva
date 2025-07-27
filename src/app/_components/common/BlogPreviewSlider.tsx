"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type BlogPost } from "../constants/blogPosts";

interface BlogPreviewSliderProps {
  blogPosts: BlogPost[];
}

export default function BlogPreviewSlider({
  blogPosts,
}: BlogPreviewSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the maximum number of slides
  const maxSlides = Math.max(0, blogPosts.length - 2); // Show 3 posts at a time

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxSlides));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxSlides ? prev + 1 : 0));
  };

  // Get current posts to show (3 at a time)
  const currentPosts = blogPosts.slice(currentIndex, currentIndex + 3);

  const t = useTranslations("BlogPreview");

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={blogPosts.length <= 3}
            className="rounded-full bg-white p-3 shadow-lg transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Previous posts"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={handleNext}
            disabled={blogPosts.length <= 3}
            className="rounded-full bg-white p-3 shadow-lg transition-all duration-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Next posts"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <BlogCard
              key={`${post.href}-${currentIndex}-${index}`}
              title={post.title}
              description={post.description}
              image={post.image}
              href={post.href}
              publishedOn={post.publishedOn}
              readTime={post.readTime}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {t("view_all")}
          </Link>
        </div>

        {/* Pagination dots */}
        {blogPosts.length > 3 && (
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(blogPosts.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-blue-600 dark:bg-blue-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}
