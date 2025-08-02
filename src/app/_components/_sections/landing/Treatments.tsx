import { useTranslations } from "next-intl";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

export default function Treatments() {
  const t = useTranslations("Treatments");
  const tAbout = useTranslations("AboutSurgery");

  const treatmentStages = [
    {
      stage: t("treatment1_title"),
      description: tAbout("pricing_table_1_2"),
      price: t("treatment1_price"),
      lvas: t("treatment1_lvas"),
      bgClass: "bg-blue-100",
      textClass: "text-blue-800",
    },
    {
      stage: t("treatment2_title"),
      description: tAbout("pricing_table_2_2"),
      price: t("treatment2_price"),
      lvas: t("treatment2_lvas"),
      bgClass: "bg-blue-300",
      textClass: "text-blue-900",
    },
    {
      stage: t("treatment3_title"),
      description: tAbout("pricing_table_3_2"),
      price: t("treatment3_price"),
      lvas: t("treatment3_lvas"),
      bgClass: "bg-blue-600",
      textClass: "text-white",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Treatment Applications */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            {t("applicable_conditions_title")}
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4 shadow-md">
              <div className="text-lg font-semibold text-blue-800">
                {t("als_title")}
              </div>
              <div className="text-sm text-blue-600">
                {t("als_description")}
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4 shadow-md">
              <div className="text-lg font-semibold text-green-800">
                {t("stroke_title")}
              </div>
              <div className="text-sm text-green-600">
                {t("stroke_description")}
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4 shadow-md">
              <div className="text-lg font-semibold text-purple-800">
                {t("msa_title")}
              </div>
              <div className="text-sm text-purple-600">
                {t("msa_description")}
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 p-4 shadow-md">
              <div className="text-lg font-semibold text-orange-800">
                {t("alzheimers_title")}
              </div>
              <div className="text-sm text-orange-600">
                {t("alzheimers_description")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4">
        {/* Desktop Table View */}
        <div className="hidden overflow-hidden rounded-2xl border-4 border-blue-200 shadow-2xl md:block">
          <Table className="w-full overflow-hidden">
            <TableBody>
              {/* Stage names row */}
              <TableRow className="border-none transition-all duration-300">
                {treatmentStages.map((treatment, index) => (
                  <TableCell
                    key={index}
                    className={`${treatment.bgClass} py-8 text-center text-2xl font-bold ${treatment.textClass} border-r border-blue-200 last:border-r-0`}
                  >
                    {treatment.stage}
                  </TableCell>
                ))}
              </TableRow>

              {/* MMSE Score row */}
              <TableRow className="border-none transition-all duration-300 hover:brightness-110">
                {treatmentStages.map((treatment, index) => (
                  <TableCell
                    key={index}
                    className={`${treatment.bgClass} py-6 text-center text-lg font-semibold ${treatment.textClass} border-opacity-30 border-t border-r border-blue-200 last:border-r-0`}
                    dangerouslySetInnerHTML={{ __html: treatment.description }}
                  />
                ))}
              </TableRow>

              {/* Price row */}
              <TableRow className="border-none transition-all duration-300 hover:brightness-110">
                {treatmentStages.map((treatment, index) => (
                  <TableCell
                    key={index}
                    className={`${treatment.bgClass} py-6 text-center text-xl font-bold ${treatment.textClass} border-opacity-30 border-t border-r border-blue-200 last:border-r-0`}
                  >
                    {treatment.price}
                  </TableCell>
                ))}
              </TableRow>

              {/* LVAs row */}
              <TableRow className="border-none transition-all duration-300 hover:brightness-110">
                {treatmentStages.map((treatment, index) => (
                  <TableCell
                    key={index}
                    className={`${treatment.bgClass} py-6 text-center text-lg font-medium ${treatment.textClass} border-opacity-30 border-t border-r border-blue-200 last:border-r-0`}
                  >
                    {treatment.lvas}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="space-y-4 md:hidden">
          {treatmentStages.map((treatment, index) => (
            <div
              key={index}
              className={`${treatment.bgClass} rounded-2xl border-4 border-blue-200 p-6 shadow-xl`}
            >
              <div
                className={`mb-4 text-center text-xl font-bold ${treatment.textClass}`}
              >
                {treatment.stage}
              </div>

              <div className="space-y-3">
                <div
                  className={`text-center text-sm font-semibold ${treatment.textClass}`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: treatment.description }}
                  />
                </div>

                <div
                  className={`text-center text-lg font-bold ${treatment.textClass}`}
                >
                  {treatment.price}
                </div>

                <div
                  className={`text-center text-sm font-medium ${treatment.textClass}`}
                >
                  {treatment.lvas}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connected flow indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-100">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-300 to-blue-500"></div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-300">
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-700 bg-blue-600">
              <div className="h-3 w-3 rounded-full bg-blue-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
