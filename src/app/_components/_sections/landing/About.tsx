import { useTranslations } from "next-intl";
import ImageOnClick from "~/app/_components/common/ImageOnClick";

export default function About() {
  const t = useTranslations("About");
  return (
    <div className="py-16 md:px-12">
      <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl">
            {t("person")}
          </h2>
          <p className="text-text-primary mb-6 text-xl leading-relaxed font-medium md:text-2xl">
            {t("speciality")}
          </p>
        </div>
        <div className="flex-shrink-0">
          <ImageOnClick
            src="/person4.png"
            alt="Dr. Qingping Xie"
            width={500}
            height={500}
            className="hover:shadow-3xl rounded-tl-3xl rounded-br-3xl shadow-2xl transition-shadow duration-300"
          />
        </div>
      </div>
      <div className="relative max-w-4xl py-6">
        <div className="bg-text-primary absolute top-0 left-0 h-[80%] w-1 rounded-full"></div>
        <p className="pl-8 text-lg leading-relaxed text-gray-700 md:text-justify md:text-xl">
          {t("about")}
        </p>
      </div>
    </div>
  );
}
