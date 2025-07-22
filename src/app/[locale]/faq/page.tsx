import { useTranslations } from "next-intl";
import Title from "~/app/_components/common/HeaderTitle";
import FAQ from "~/app/_components/landing_sections/FAQ";
import BlogPreviewSlider from "~/app/_components/common/BlogPreviewSlider";
import { getBlogPosts } from "~/app/_components/constants/blogPosts";

export default function FAQPage() {
  const t = useTranslations("Blog");
  const blogPosts = getBlogPosts();

  return (
    <div className="bg-bg-secondary">
      <FAQ />
      <div className="bg-bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Title title={t("blog_title_header")} />
          <BlogPreviewSlider blogPosts={blogPosts} />
        </div>
      </div>
    </div>
  );
}
