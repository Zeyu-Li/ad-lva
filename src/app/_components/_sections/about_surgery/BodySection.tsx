import { useTranslations } from "next-intl";
import ImageOnClick from "../../common/ImageOnClick";

export default function BodySection() {
  const t = useTranslations("BodySection");

  const sections = [
    {
      id: 1,
      image: "/process1.png",
      title: t("body_section_1_title"),
      imageDescription: t("body_section_1_img_description"),
      text: t("body_section_1_text"),
    },
    {
      id: 2,
      image: "/person3.png",
      title: t("body_section_2_title"),
      imageDescription: t("body_section_2_img_description"),
      text: t("body_section_2_text"),
    },
    {
      id: 3,
      image: "/research1.png",
      title: t("body_section_3_title"),
      imageDescription: t("body_section_3_img_description"),
      text: t("body_section_3_text"),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
      {/* Sections */}
      <div className="space-y-16">
        {sections.map((section) => (
          <div key={section.id}>
            {/* Section Title */}
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              {section.title}
            </h3>

            {/* Image */}
            <div className="mb-6">
              <div className="flex justify-center">
                <ImageOnClick
                  src={section.image}
                  alt={section.imageDescription}
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* Image Description */}
            <p className="mb-8 text-center text-sm text-gray-600 italic">
              {section.imageDescription}
            </p>

            {/* Text Content */}
            <p className="text-lg leading-relaxed text-gray-700">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
