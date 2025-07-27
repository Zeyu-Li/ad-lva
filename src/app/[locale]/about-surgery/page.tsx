import { useTranslations } from "next-intl";
import Pricing from "~/app/_components/about_surgery/pricing";
import Title from "~/app/_components/common/HeaderTitle";
import BodySection from "~/app/_components/about_surgery/BodySection";

export default function AboutSurgeryPage() {
  const t = useTranslations("AboutSurgery");
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title title={t("title")} />
        <div className="mt-8">
          <iframe
            src="https://www.youtube.com/embed/u--Ee-KM20Q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full rounded-lg"
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <BodySection />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Pricing />
      </section>
    </main>
  );
}
