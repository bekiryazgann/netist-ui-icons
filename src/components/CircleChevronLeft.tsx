import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.78 6.47a.75.75 0 0 1 0 1.06L9.31 10l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0"
    />
    <path
      fillRule="evenodd"
      d="M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
    />
  </svg>
);
export default SvgCircleChevronLeft;
