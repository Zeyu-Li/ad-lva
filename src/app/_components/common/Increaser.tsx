"use client";

import React from "react";
import CountUp from "react-countup";

interface Props {
  scrolled: boolean;
  number: number;
  classNames?: string;
  preSnippet?: string;
  postSnippet?: string;
}

const Increaser: React.FC<Props> = ({
  scrolled,
  number,
  preSnippet = "",
  postSnippet = "",
  classNames = "",
}) => {
  return (
    <span className={classNames}>
      {preSnippet}
      <CountUp end={scrolled ? number : 0} className="inline" />
      {postSnippet}
    </span>
  );
};
export default Increaser;
