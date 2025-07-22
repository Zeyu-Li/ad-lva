import Hero from "../_components/landing_sections/Hero";
import LandingVideo from "../_components/landing_sections/Video";
import Treatments from "../_components/landing_sections/Treatments";
import Counter from "../_components/landing_sections/Counter";
import About from "../_components/landing_sections/About";
import Research from "../_components/landing_sections/Research";
import Cards from "../_components/landing_sections/Cards";
import FAQ from "../_components/landing_sections/FAQ";
import Contact from "../_components/common/Contact";

export default function Home() {
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
        <Research />
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
