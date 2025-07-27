"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ResearchPaperProps {
  title: string;
  description: string;
  link: string;
  image: string;
  delay?: number;
}

export default function ResearchPaper({
  title,
  description,
  link,
  image,
  delay = 0,
}: ResearchPaperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="group h-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="aspect-w-16 aspect-h-10 overflow-hidden">
            <Image
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={image}
              alt={title}
              width={400}
              height={256}
            />
          </div>
        </a>
        <div className="p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-600">
            {title}
          </h3>
          <p className="leading-relaxed text-gray-600">{description}</p>
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
            >
              Read more
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
