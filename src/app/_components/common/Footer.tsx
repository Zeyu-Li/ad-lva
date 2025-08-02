import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import {
  FaInstagram,
  FaYoutube,
  FaWeixin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import NewsletterSubscription from "./NewsletterSubscription";
import { navItems } from "./nav/nav_items";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/dearestanqi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: FaInstagram,
      tag: "surgeryforalzheimerdisease",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCPsU1EEnbPV4gNDo_7yb5OA",
      icon: FaYoutube,
      tag: "@surgeryforalzheimerdisease",
    },
    {
      name: "WeChat",
      url: "#",
      icon: FaWeixin,
      tag: "WeChat ID",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: FaWhatsapp,
      tag: "WhatsApp Chat",
    },
  ];

  const t_footer = useTranslations("Footer");
  const t_navbar = useTranslations("Navbar");

  return (
    <footer className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Address and Hours */}
          <div className="space-y-6">
            {/* Address */}
            <div>
              <h3 className="mb-4 flex items-center text-lg font-semibold">
                <FaMapMarkerAlt className="mr-2 text-white" />
                {t_footer("address_header")}
              </h3>
              <div className="space-y-2 text-white">
                <p>{t_footer("address1")}</p>
                <p>{t_footer("address2")}</p>
                <p>{t_footer("postcode")}</p>
                <p>
                  Email:{" "}
                  <a
                    title="Email"
                    href="mailto:xqp1376@126.com"
                    className="rounded px-1 text-white underline transition-colors hover:text-gray-900"
                  >
                    xqp1376@126.com
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-4 flex items-center text-lg font-semibold">
                <FaClock className="mr-2 text-white" />
                {t_footer("hours_header")}
              </h3>
              <div className="space-y-2 text-white">
                <p>{t_footer("hours1")}</p>
                <p>{t_footer("hours2")}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t_footer("quick_links_header")}
            </h3>
            <ul className="space-y-3">
              {navItems.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="rounded px-1 text-white underline transition-colors hover:text-gray-900"
                    title={t_navbar(link.key)}
                  >
                    {t_navbar(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter & Social Media */}
          <div>
            {/* Newsletter Subscription */}
            <NewsletterSubscription />

            {/* Social Media */}
            <div>
              <div className="space-y-3">
                {socials.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 rounded px-2 py-1 transition-colors hover:bg-blue-700"
                      aria-label={social.name}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-white underline">{social.tag}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-white">
          <p>{t_footer("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
