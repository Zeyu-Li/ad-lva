import { useTranslations } from "next-intl";
import BodySection from "~/app/_components/about_surgery/BodySection";
import Title from "~/app/_components/common/HeaderTitle";

export default function WhatPage() {
  const t = useTranslations("What");
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title title={t("title")} />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <BodySection />
      </section>
    </main>
  );
}
