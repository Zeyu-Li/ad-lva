import Hero from "../_components/landing_sections/Hero";
import LandingVideo from "../_components/landing_sections/Video";
import Treatments from "../_components/landing_sections/Treatments";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="bg-bg-primary py-12">
        <LandingVideo />
      </section>
      <section>
        <Treatments />
      </section>
    </main>
  );
}
