import * as React from "react";
import type { SVGProps } from "react";
const SvgHeading02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 4v16M18 4v16M9.5 4v16m2-16H4m14 8H9.5m2 8H4m16 0h-4m4-16h-4"
    />
  </svg>
);
export default SvgHeading02;
