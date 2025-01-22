import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.22 12.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 .001-1.06l-3-3.012a.75.75 0 0 0-1.062 1.059l2.472 2.482z" />
    <path
      fillRule="evenodd"
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
);
export default SvgCircleChevronRight;
