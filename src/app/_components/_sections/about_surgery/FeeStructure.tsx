import { useTranslations } from "next-intl";
import Title from "~/app/_components/common/HeaderTitle";

export default function FeeStructure() {
  const t = useTranslations("Fees");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Title title={t("title")} />

      {/* Subtitle */}
      <h3 className="my-6 text-lg font-semibold text-gray-700">
        {t("subtitle")}
      </h3>

      {/* Payment Steps */}
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
            1
          </div>
          <div className="flex-1">
            <p className="leading-relaxed text-gray-800">
              {t("fee_structure_1")}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
            2
          </div>
          <div className="flex-1">
            <p className="leading-relaxed text-gray-800">
              {t("fee_structure_2")}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
            3
          </div>
          <div className="flex-1">
            <p className="leading-relaxed text-gray-800">
              {t("fee_structure_3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
