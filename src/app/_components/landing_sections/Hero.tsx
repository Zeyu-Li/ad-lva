import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="relative min-h-[80vh] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Blur and white overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px]"></div>

      {/* Content */}
      <div className="relative z-10 m-auto w-[80%] max-w-none">
        <div className="flex min-h-[80vh] flex-row items-center justify-center gap-4">
          <div className="flex flex-2 flex-col gap-6">
            <h1 className="text-5xl leading-tight font-bold md:text-6xl">
              {t("title")}
            </h1>
            <p className="text-text-primary text-xl leading-relaxed md:text-2xl">
              {t("description")}
            </p>
            <button className="bg-primary w-fit rounded-lg px-6 py-3 text-lg font-semibold text-white">
              {t("button")}
            </button>
          </div>
          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
}
