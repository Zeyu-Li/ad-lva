import { useTranslations } from "next-intl";
import ImageOnClick from "../common/ImageOnClick";

export default function Hype() {
  const t = useTranslations("Hype");
  return (
    <div className="bg-bg-primary overflow-hidden pt-16">
      <div className="flex min-h-[500px]">
        {/* Left column for text */}
        <div className="flex flex-1 flex-col justify-center py-8 pr-4 pl-[20%]">
          <h2 className="text-5xl font-bold text-black">
            {t("title")}
            <span className="text-text-accent text-6xl font-bold">{"..."}</span>
          </h2>
          <p className="mt-4 text-4xl text-gray-600 dark:text-gray-400">
            {t("location")}
          </p>
        </div>

        {/* Right column for image - flush to right edge */}
        <div className="relative flex-1">
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
