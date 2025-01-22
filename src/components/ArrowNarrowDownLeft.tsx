import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowNarrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18m0 0h8m-8 0v-8"
    />
  </svg>
);
export default SvgArrowNarrowDownLeft;
