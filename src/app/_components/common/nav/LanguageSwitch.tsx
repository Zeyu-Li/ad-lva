import { Link } from "~/i18n/navigation";

interface LanguageSwitchProps {
  locale: string;
  onLanguageChange?: () => void;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

const LanguageSwitch = ({ locale }: LanguageSwitchProps) => {
  const languages = [
    { code: "en", name: "EN", fullName: "English" },
    { code: "zh", name: "中文", fullName: "Chinese" },
  ];

  return (
    // width fit content
    <div className="flex w-fit overflow-hidden rounded-lg border border-gray-300 bg-white">
      {languages.map((language, index) => (
        <Link
          key={language.code}
          href="/"
          locale={language.code}
          className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
            locale === language.code
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
          } ${index === 0 ? "" : "border-l border-gray-300"}`}
          title={language.name}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitch;
