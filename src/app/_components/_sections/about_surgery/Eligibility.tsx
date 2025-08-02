import { useTranslations } from "next-intl";
import Title from "~/app/_components/common/HeaderTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function Eligibility() {
  const t = useTranslations("Eligibility");

  // Generate table data dynamically from localization
  const tableRows = [];
  for (let row = 1; row <= 9; row++) {
    const rowData = [];
    for (let col = 1; col <= 5; col++) {
      const key = `eligibility_table_${row}_${col}`;
      rowData.push(t(key));
    }
    tableRows.push(rowData);
  }

  // Extract header row and data rows
  const [headerRow, ...dataRows] = tableRows;

  // Safety check to ensure we have data
  if (!headerRow || dataRows.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Title title={t("title")} />
        <div className="mt-8 text-center text-gray-500">
          No eligibility data available
        </div>
      </div>
    );
  }

  const getRowStyle = (rowIndex: number, cellIndex: number) => {
    // Header column styling
    if (cellIndex === 0) {
      return "bg-gray-50 font-medium";
    }

    // Eligibility result column styling
    if (cellIndex === 4) {
      const cellValue = dataRows[rowIndex]?.[cellIndex];
      if (cellValue?.includes("OK") || cellValue?.includes("可以")) {
        return "bg-green-50 text-green-800 font-medium";
      } else if (cellValue?.includes("Not") || cellValue?.includes("不可")) {
        return "bg-red-50 text-red-800 font-medium";
      }
    }

    // Yes/No cell styling
    const cellValue = dataRows[rowIndex]?.[cellIndex];
    if (cellValue === "Yes" || cellValue === "是") {
      return "bg-green-50 text-green-700";
    } else if (cellValue === "No" || cellValue === "否") {
      return "bg-red-50 text-red-700";
    }

    return "";
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Title title={t("title")} />

      <div className="mt-8">
        {/* Mobile scroll hint */}
        <div className="mb-4 block text-center text-sm text-gray-600 md:hidden">
          <span className="rounded-md bg-blue-50 px-3 py-2 text-blue-700">
            ← {t("scroll_hint") || "Scroll right to see all columns"} →
          </span>
        </div>

        <div className="overflow-x-auto">
          <Table className="min-w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <TableHeader>
              <TableRow className="bg-gray-100">
                {headerRow.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`border-r border-gray-200 text-center font-semibold text-gray-900 ${index === 0 ? "w-2/5" : "w-1/5"} ${index === headerRow.length - 1 ? "border-r-0" : ""} `}
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataRows.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-gray-50">
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      className={`border-r border-gray-200 text-center ${cellIndex === 0 ? "text-left" : "text-center"} ${cellIndex === row.length - 1 ? "border-r-0" : ""} ${getRowStyle(rowIndex, cellIndex)} `}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
