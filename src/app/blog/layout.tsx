import "~/styles/globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import CONSTANTS from "~/app/_components/constants/constants";
import BlogFooter from "~/app/_components/common/BlogFooter";
import BlogNav from "~/app/_components/common/nav/BlogNav";
import { PostHogProvider } from "~/app/providers";

export const metadata: Metadata = {
  title: `${CONSTANTS.DEFAULT_TITLE} - Blog`,
  description: CONSTANTS.DEFAULT_DESCRIPTION,
  generator: CONSTANTS.DEFAULT_KEYWORDS.join(", "),
  creator: CONSTANTS.DEFAULT_AUTHOR,
  publisher: "index, follow",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    url: `${CONSTANTS.DEFAULT_BASE_URL}/blog`,
    title: `${CONSTANTS.DEFAULT_TITLE} - Blog`,
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <PostHogProvider>
          <BlogNav />
          <div className="min-h-screen">
            <main className="container mx-auto px-4 py-8">
              <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
                {children}
              </div>
            </main>
          </div>
          <BlogFooter />
        </PostHogProvider>
      </body>
    </html>
  );
}
