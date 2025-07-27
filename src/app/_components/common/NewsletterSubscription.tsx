"use client";

import { useTranslations } from "next-intl";

interface NewsletterSubscriptionProps {
  isFooterVariant?: boolean;
}

export default function NewsletterSubscription({
  isFooterVariant = true,
}: NewsletterSubscriptionProps) {
  const t_footer = useTranslations("Footer");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add subscription logic here
  };

  return (
    <div className={isFooterVariant ? "mb-6" : "mb-8"}>
      <h3
        className={`mb-4 font-semibold ${
          isFooterVariant ? "text-lg" : "text-2xl text-gray-900 md:text-3xl"
        }`}
      >
        {t_footer("subscribe_header")}
      </h3>
      <form
        onSubmit={handleSubmit}
        className={`flex ${
          isFooterVariant
            ? "space-x-2"
            : "flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
        }`}
      >
        <input
          type="email"
          placeholder={t_footer("enter_email")}
          className={`rounded-md border focus:ring-2 focus:outline-none ${
            isFooterVariant
              ? "flex-1 border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              : "flex-1 border-gray-400 bg-gray-50 px-4 py-3 text-lg text-gray-900 placeholder-gray-600 focus:border-blue-600 focus:bg-white focus:ring-blue-600"
          }`}
          required
        />
        <button
          type="submit"
          className={`rounded-md font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
            isFooterVariant
              ? "bg-white px-4 py-2 text-blue-600 hover:bg-gray-100 focus:ring-white focus:ring-offset-blue-600"
              : "bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700 focus:ring-blue-600 focus:ring-offset-white"
          }`}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
