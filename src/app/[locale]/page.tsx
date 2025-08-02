import Hero from "~/app/_components/_sections/landing/Hero";
import LandingVideo from "~/app/_components/_sections/landing/Video";
import Treatments from "~/app/_components/_sections/landing/Treatments";
import Counter from "~/app/_components/_sections/landing/Counter";
import About from "~/app/_components/_sections/landing/About";
import Research from "~/app/_components/_sections/landing/Research";
import Cards from "~/app/_components/_sections/landing/Cards";
import FAQ from "~/app/_components/_sections/landing/FAQ";
import Contact from "~/app/_components/contact/Contact";

export default function Home() {
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
    <main>
      <section>
        <Hero />
      </section>
      <section className="bg-bg-primary py-12">
        <LandingVideo />
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <Treatments />
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <Counter />
      </section>
      <section>
        <Cards />
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <About />
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <Research papers={researchPapers} />
      </section>
      <section className="bg-bg-secondary">
        <FAQ />
      </section>
      <section className="bg-bg-primary">
        <Contact />
      </section>
    </main>
  );
}
