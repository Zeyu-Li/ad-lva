import Research from "../landing/Research";
import CollaborationPapers from "./CollaborationPapers";

export default function Collaborators() {
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
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/water.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-7xl px-4">
        <Research include_title={false} papers={researchPapers} />
      </section>
      <section className="relative z-10 mx-auto max-w-7xl px-4">
        <CollaborationPapers />
      </section>
    </div>
  );
}
