import Title from "~/app/_components/common/HeaderTitle";
import ResearchVideos from "~/app/_components/research_sections/ResearchVideos";
import Collaborators from "~/app/_components/research_sections/Collaborators";
import { getBlogPosts } from "~/app/_components/constants/blogPosts";
import BlogPreviewSlider from "~/app/_components/common/BlogPreviewSlider";
import Hype from "~/app/_components/research_sections/Hype";
import { useTranslations } from "next-intl";

export default function ResearchPage() {
  const blogPosts = getBlogPosts();
  const t = useTranslations("Blog");

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Title title="Research and Collaboration" />
        <ResearchVideos />
      </section>
      <section>
        <Collaborators />
      </section>

      <section>
        <Hype />
      </section>
      <div className="bg-bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Title title={t("blog_title_header")} />
          <BlogPreviewSlider blogPosts={blogPosts} />
        </div>
      </div>
    </main>
  );
}
