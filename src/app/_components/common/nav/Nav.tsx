import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import MobileNav from "./NavMobile";
import { navItems } from "./nav_items";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations("Navbar");

  return (
    <header className="border-text-primary sticky top-0 z-50 flex w-full items-center justify-between border-b-[1px] bg-white">
      <div className="text-text-primary mx-auto flex w-full max-w-6xl items-center justify-between p-4 px-8">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            className="p-2"
            width={104}
            height={52}
            alt="AD AVL Logo"
            title="AD AVL Logo"
          />
        </Link>
        <div className="hidden space-x-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              title={t(item.key)}
              className="text-text-primary text-sm underline transition-colors duration-200 hover:text-blue-500"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
