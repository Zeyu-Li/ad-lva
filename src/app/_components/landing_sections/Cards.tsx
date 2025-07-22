import { useTranslations } from "next-intl";
import Card from "../common/Card";

export default function Cards() {
  const t = useTranslations("Cards");

  const cardsData = [
    {
      id: 1,
      image: "/hero.jpg", // Using existing image as placeholder
      title: t("card1_title"),
      description: t("card1_description"),
      buttonText: t("card1_button"),
      buttonLink: "/about-surgery",
      imageAlt: "Hospital building",
    },
    {
      id: 2,
      image: "/hero.jpg", // Using existing image as placeholder
      title: t("card2_title"),
      description: t("card2_description"),
      buttonText: t("card2_button"),
      buttonLink: "/about-hangzhou",
      imageAlt: "Hangzhou city view",
    },
    {
      id: 3,
      image: "/hero.jpg", // Using existing image as placeholder
      title: t("card3_title"),
      description: t("card3_description"),
      buttonText: t("card3_button"),
      buttonLink: "/services",
      imageAlt: "Medical services",
    },
  ];

  return (
    <div className="bg-bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
