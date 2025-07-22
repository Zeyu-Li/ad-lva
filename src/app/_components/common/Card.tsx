import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageAlt?: string;
}

export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  imageAlt,
}: CardProps) {
  return (
    <div className="bg-bg-secondary/95 flex h-full flex-col overflow-hidden rounded-md border border-gray-700 shadow-sm shadow-white/10">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={imageAlt ?? title}
          width={400}
          height={250}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 flex-1 leading-relaxed text-gray-300">
          {description}
        </p>
        <Button
          asChild
          size="default"
          className="self-start bg-green-600 hover:bg-green-700"
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}
