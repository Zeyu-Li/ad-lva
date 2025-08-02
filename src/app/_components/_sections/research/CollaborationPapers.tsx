import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CollaborationPapers() {
  const t = useTranslations("Collaborators");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        {/* Text Section */}
        <div className="flex-1 lg:pr-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            {t("research1")}
          </h2>
        </div>

        {/* Staggered Papers Section */}
        <div className="relative flex-1">
          <div className="relative h-96 w-full">
            {/* Paper 1 - positioned higher and to the left */}
            <div className="absolute top-0 left-0 h-80 w-64 rotate-[-2deg] transform shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
              <Image
                src="/paper1.png"
                alt="Research Paper 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Paper 2 - positioned lower and to the right */}
            <div className="absolute top-16 right-0 h-80 w-64 rotate-[3deg] transform shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0">
              <Image
                src="/paper2.png"
                alt="Research Paper 2"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
