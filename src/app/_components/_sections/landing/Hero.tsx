import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <div className="relative min-h-[80vh] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Blur and white overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px]"></div>

      {/* Content */}
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 w-[80%] px-4">
          <div className="flex min-h-[80vh] flex-row items-center justify-center gap-4">
            <div className="flex flex-2 flex-col gap-6">
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="text-text-primary text-lg leading-relaxed sm:text-xl md:text-2xl">
                {t("description")}
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-fit cursor-pointer"
              >
                {t("button")}
              </Button>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
