import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import CONSTANTS from "~/app/_components/constants/constants";
import { TRPCReactProvider } from "~/trpc/react";
import { routing } from "~/i18n/routing";
import Footer from "~/app/_components/common/Footer";
import Nav from "~/app/_components/common/nav/Nav";
import { PostHogProvider } from "~/app/providers";

export const metadata: Metadata = {
  title: CONSTANTS.DEFAULT_TITLE,
  description: CONSTANTS.DEFAULT_DESCRIPTION,
  generator: CONSTANTS.DEFAULT_KEYWORDS.join(", "),
  creator: CONSTANTS.DEFAULT_AUTHOR,
  publisher: "index, follow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: CONSTANTS.DEFAULT_BASE_URL,
    title: CONSTANTS.DEFAULT_TITLE,
    description: CONSTANTS.DEFAULT_DESCRIPTION,
    siteName: CONSTANTS.DEFAULT_TITLE,
    images: "https://www.ad-lva.com/ogimage.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${poppins.variable}`}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            <TRPCReactProvider>
              <Nav locale={locale} />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </TRPCReactProvider>
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
