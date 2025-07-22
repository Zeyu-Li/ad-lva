import { useTranslations } from "next-intl";
import ResearchPaper from "../common/ResearchPaper";
import Title from "../common/HeaderTitle";

export default function Research() {
  const t = useTranslations("Research");

  // Research papers data structure
  const researchPapers = [
    {
      id: 1,
      titleKey: "research_paper_1",
      descriptionKey: "research_paper_1_description",
      linkKey: "research_paper_1_link",
      link: "https://www.nature.com",
      image: "/research1.png",
      delay: 0,
    },
    {
      id: 2,
      titleKey: "research_paper_2",
      descriptionKey: "research_paper_2_description",
      linkKey: "research_paper_2_link",
      link: "https://www.nature.com",
      image: "/research1.png",
      delay: 200,
    },
    {
      id: 3,
      titleKey: "research_paper_3",
      descriptionKey: "research_paper_3_description",
      linkKey: "research_paper_3_link",
      link: "https://www.nature.com",
      image: "/research1.png",
      delay: 400,
    },
  ];

  return (
    <div className="py-16">
      <div className="mb-12">
        <Title title={t("title")} />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {researchPapers.map((paper) => (
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
