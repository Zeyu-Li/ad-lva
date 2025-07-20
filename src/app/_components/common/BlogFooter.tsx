import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function BlogFooter() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/adavl",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/adavl",
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/adavl",
      icon: FaYoutube,
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

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
                Address
              </h3>
              <div className="space-y-2 text-white">
                <p>AD-LVA Medical Center</p>
                <p>123 Medical Plaza</p>
                <p>12345 City, Country</p>
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
                Hours
              </h3>
              <div className="space-y-2 text-white">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded px-1 text-white underline transition-colors hover:text-gray-900"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 transition-colors hover:bg-gray-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-8 text-center text-white">
          <p>&copy; 2024 AD-LVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
