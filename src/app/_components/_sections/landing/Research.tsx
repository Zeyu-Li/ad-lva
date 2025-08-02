import { useTranslations } from "next-intl";
import ResearchPaper from "~/app/_components/common/ResearchPaper";
import Title from "~/app/_components/common/HeaderTitle";

interface ResearchPaper {
  include_title?: boolean;
  papers: {
    id: number;
    titleKey: string;
    descriptionKey: string;
    linkKey: string;
    link: string;
    image: string;
    delay: number;
  }[];
}

export default function Research({
  include_title = true,
  papers,
}: ResearchPaper) {
  const t = useTranslations("Research");

  return (
    <div className="py-16">
      <div className="mb-12">
        {include_title && <Title title={t("title")} />}
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {papers.map((paper) => (
          <ResearchPaper
            key={paper.id}
            title={t(paper.titleKey)}
            description={t(paper.descriptionKey)}
            link={paper.link}
            image={paper.image}
            delay={paper.delay}
          />
        ))}
      </div>
    </div>
  );
}
