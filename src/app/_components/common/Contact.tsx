"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  FaWhatsapp,
  FaWeixin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import Title from "./HeaderTitle";

export default function Contact() {
  const t = useTranslations("Contact");
  const t_footer = useTranslations("Footer");

  const [formData, setFormData] = useState({
    name: "",
    emailTitle: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Empty submit handler as requested
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <Title title={t("title")} />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-text-accent mb-2 block text-sm font-bold"
                  >
                    {t("name")}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("name")}
                    className="w-full bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="emailTitle"
                    className="text-text-accent mb-2 block text-sm font-bold"
                  >
                    {t("email")}
                  </label>
                  <Input
                    type="text"
                    id="emailTitle"
                    name="emailTitle"
                    value={formData.emailTitle}
                    onChange={handleInputChange}
                    placeholder={t("email")}
                    className="w-full bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-text-accent mb-2 block text-sm font-bold"
                >
                  {t("email_address")}
                  {"*"}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("email_address")}
                  required
                  className="w-full bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-text-accent mb-2 block text-sm font-bold"
                >
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("message")}
                  required
                  rows={6}
                  className="w-full bg-white"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <FaPaperPlane className="mr-2 h-4 w-4" />
                {t("send")}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              {t("title")}
            </h3>

            {/* Quick Contact Methods */}
            <div className="mb-8 space-y-4">
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-300 hover:bg-green-50"
              >
                <FaWhatsapp className="mr-4 h-6 w-6 text-green-500" />
                <div>
                  <div className="font-medium text-gray-800">
                    {t("whatsapp")}
                  </div>
                  <div className="text-sm text-gray-600">
                    Click to chat on WhatsApp
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 p-4 transition-colors hover:border-green-300 hover:bg-green-50"
              >
                <FaWeixin className="mr-4 h-6 w-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-800">{t("wechat")}</div>
                  <div className="text-sm text-gray-600">
                    Connect via WeChat
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
