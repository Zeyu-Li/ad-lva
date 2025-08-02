import NewsletterSubscription from "~/app/_components/common/NewsletterSubscription";
import ResearchVideos from "~/app/_components/_sections/case_study/ResearchVideos";
import { useTranslations } from "next-intl";
import Title from "~/app/_components/common/HeaderTitle";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function CaseStudyPage() {
  const t = useTranslations("CaseStudy");
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title title={t("title")} />
        <div className="mt-8">
          <ResearchVideos />
        </div>
        <div className="my-8">
          <NewsletterSubscription isFooterVariant={false} />
        </div>
        {/* Button to learn more about LVA surgery */}
        <div className="mt-8 flex justify-center">
          <Link href="/about-surgery">
            <Button size="lg">{t("learn_more")}</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
