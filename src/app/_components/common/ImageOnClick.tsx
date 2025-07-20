"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageOnClickProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageOnClick({
  src,
  alt,
  width,
  height,
  className,
}: ImageOnClickProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ImageModal
          src={src}
          alt={alt}
          width={width}
          height={height}
          onClose={() => setIsOpen(false)}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
        className={`${className} cursor-pointer transition-all duration-300 hover:brightness-110`}
      />
    </>
  );
}
