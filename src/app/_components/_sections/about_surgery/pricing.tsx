import { useTranslations } from "next-intl";
import Title from "../../common/HeaderTitle";
import Link from "next/link";

export default function Pricing() {
  const t = useTranslations("AboutSurgery");

  const pricingTiers = Array.from({ length: 3 }, (_, index) => {
    const tierNumber = index + 1;
    return {
      stage: t(`pricing_table_${tierNumber}_1`),
      mmse: t(`pricing_table_${tierNumber}_2`),
      price: t(`pricing_table_${tierNumber}_3`),
      description: t(`pricing_table_${tierNumber}_4`),
    };
  });

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Title title={t("pricing_title")} />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-green-400 hover:shadow-xl hover:shadow-green-100/50"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {tier.stage}
                </h3>
                <p
                  className="mt-2 text-lg text-gray-600"
                  dangerouslySetInnerHTML={{ __html: tier.mmse }}
                />

                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex-1">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-center text-sm font-medium text-gray-700">
                    {t("expected_lvas")}
                  </p>
                  <p className="mt-2 text-center text-gray-600">
                    {tier.description}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="w-full">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
                    {t("contact_for_details")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">{t("pricing_disclaimer")}</p>
        </div>
      </div>
    </div>
  );
}
