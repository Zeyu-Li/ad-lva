"use client";

import { useRef, useState, useEffect } from "react";
import { FaUserMd, FaRulerHorizontal, FaCut } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Increaser from "../common/Increaser";

const OPERATIONS = 30;
const RANGE1 = 2;
const RANGE2 = 8;

const INCISION_RANGE1 = 6;
const INCISION_RANGE2 = 8;

const TEXT_SIZE = "text-4xl";

const Counter: React.FC = () => {
  const t = useTranslations("Counter");
  const [scrolledCount, setScrolledCount] = useState(false);
  const counterIntersectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.intersectionRatio > 0.75 && !scrolledCount) {
          setScrolledCount(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    if (counterIntersectionRef.current) {
      observer.observe(counterIntersectionRef.current);
    }

    return () => {
      if (counterIntersectionRef.current) {
        observer.unobserve(counterIntersectionRef.current);
      }
    };
  }, [scrolledCount]);

  return (
    <div
      className="flex flex-col justify-center lg:flex-row"
      ref={counterIntersectionRef}
    >
      {/* tailwind style equivalent to background: linear-gradient(180deg, #F96614 0%, #F9C614 100%); */}
      <span className="flex flex-col items-center p-12 lg:pl-0">
        <FaUserMd className="mb-4 text-5xl text-black" />
        <div className="flex flex-row">
          <div className="flex flex-col items-center justify-center">
            <Increaser
              number={OPERATIONS}
              postSnippet={t("operations")}
              scrolled={scrolledCount}
              classNames={`${TEXT_SIZE} font-bold increaserGrad1 animate-gradient bg-clip-text`}
            />
          </div>
        </div>
      </span>
      <span className="flex flex-col items-center py-12 lg:pl-0">
        <FaRulerHorizontal className="mb-4 text-5xl text-black" />
        <div className="flex flex-row">
          <div className="flex flex-col items-center justify-center">
            <Increaser
              number={RANGE1}
              preSnippet="0."
              postSnippet={"mm-"}
              scrolled={scrolledCount}
              classNames={`${TEXT_SIZE} font-bold increaserGrad1 animate-gradient bg-clip-text`}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Increaser
              number={RANGE2}
              preSnippet="0."
              postSnippet={t("range2_post")}
              scrolled={scrolledCount}
              classNames={`${TEXT_SIZE} font-bold increaserGrad1 animate-gradient bg-clip-text`}
            />
          </div>
        </div>
      </span>
      <span className="flex flex-col items-center justify-center py-12 pl-12">
        <FaCut className="mb-4 text-5xl text-black" />
        <div className="flex flex-row">
          <div className="flex flex-col items-center justify-center">
            <Increaser
              number={INCISION_RANGE1}
              postSnippet="-"
              scrolled={scrolledCount}
              classNames={`${TEXT_SIZE} font-bold increaserGrad1 animate-gradient bg-clip-text`}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Increaser
              number={INCISION_RANGE2}
              postSnippet={t("incision2_post")}
              scrolled={scrolledCount}
              classNames={`${TEXT_SIZE} font-bold increaserGrad1 animate-gradient bg-clip-text`}
            />
          </div>
        </div>
      </span>
    </div>
  );
};
export default Counter;
