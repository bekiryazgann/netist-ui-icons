import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.25 5A3.25 3.25 0 0 0 5 8.25v7.5a.75.75 0 0 1-1.5 0v-7.5A4.75 4.75 0 0 1 8.25 3.5h7.5a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);
export default SvgCornerRound;
