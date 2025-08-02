import { useTranslations } from "next-intl";
import ImageOnClick from "~/app/_components/common/ImageOnClick";

export default function Hype() {
  const t = useTranslations("Hype");
  return (
    <div className="bg-bg-primary overflow-hidden pt-16">
      <div className="flex min-h-[500px] flex-col md:flex-row">
        {/* Left column for text */}
        <div className="flex flex-1 flex-col justify-center px-4 py-8 md:pr-4 md:pl-[20%]">
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            {t("title")}
            <span className="text-text-accent text-4xl font-bold md:text-6xl">
              {"..."}
            </span>
          </h2>
          <p className="mt-4 text-2xl text-gray-600 md:text-4xl dark:text-gray-400">
            {t("location")}
          </p>
        </div>

        {/* Right column for image - flush to right edge */}
        <div className="relative min-h-[300px] flex-1 md:min-h-0">
          <ImageOnClick
            src="/spain.jpg"
            alt="Hype"
            height={500}
            width={1000}
            className="absolute top-0 right-0 h-full w-full rounded-tl-4xl object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
}
