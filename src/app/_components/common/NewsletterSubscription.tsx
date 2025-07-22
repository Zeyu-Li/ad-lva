"use client";

import { useTranslations } from "next-intl";

export default function NewsletterSubscription() {
  const t_footer = useTranslations("Footer");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add subscription logic here
  };

  return (
    <div className="mb-6">
      <h3 className="mb-4 text-lg font-semibold">
        {t_footer("subscribe_header")}
      </h3>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="rounded-md bg-white px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 focus:outline-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
