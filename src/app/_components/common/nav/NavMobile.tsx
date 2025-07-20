"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import LanguageSwitch from "./LanguageSwitch";

interface MobileNavProps {
  locale: string;
}

const MobileNav = ({ locale }: MobileNavProps) => {
  const [navShow, setNavShow] = useState(false);
  const t = useTranslations("Navbar");

  const navItems = [
    { key: "what", href: "/what" },
    { key: "about_surgery", href: "/about-surgery" },
    { key: "case_study", href: "/case-study" },
    { key: "research", href: "/research" },
    { key: "contact", href: "/contact" },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <div className="hidden lg:flex">
        <LanguageSwitch locale={locale} />
      </div>
      <div className="lg:hidden">
        <button
          type="button"
          className="mr-1 ml-1 h-8 w-8 rounded py-1"
          aria-label="Toggle Menu"
          onClick={onToggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-black"
          >
            {navShow ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
        <div
          className={`fixed top-20 right-0 z-50 h-screen w-full transform bg-black opacity-95 duration-300 ease-in-out ${
            navShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed h-full w-full cursor-auto bg-black focus:outline-none"
            onClick={onToggleNav}
          />
          <nav className="fixed mt-8 h-full">
            <div className="px-12 py-4">
              <LanguageSwitch locale={locale} />
            </div>
            {navItems.map((item) => (
              <div key={item.key} className="px-12 py-4">
                <Link
                  href={item.href}
                  title={t(item.key)}
                  className="text-2xl tracking-widest text-gray-100 hover:text-blue-500"
                  onClick={onToggleNav}
                >
                  {t(item.key)}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
