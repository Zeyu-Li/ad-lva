import Contact from "~/app/_components/contact/Contact";
import { useTranslations } from "next-intl";
import ImageOnClick from "~/app/_components/common/ImageOnClick";

export default function ContactPage() {
  const t = useTranslations("Contact");
  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="text-text-accent flex-1 text-lg font-medium">
            {t("contact_message")}
          </div>
          <div className="flex-shrink-0">
            <ImageOnClick
              className="rounded-tl-4xl rounded-br-4xl"
              src="/person3.png"
              alt="contact message"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
