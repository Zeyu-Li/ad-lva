import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";
import Title from "../common/HeaderTitle";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const faqItems = [
    {
      id: 1,
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: 2,
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: 3,
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      id: 4,
      question: t("question4"),
      answer: t("answer4"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div>
        <Title title={t("title")} variant="light" />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.id} className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.question}
                </h3>
                {/* Horizontal line */}
                <div className="mb-4 h-px w-4/5 bg-white"></div>
                <p className="leading-relaxed text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-800 hover:bg-gray-100"
          >
            <Link href="/faq">{t("other_questions")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
