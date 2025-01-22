import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchRefraction = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21 21-4.35-4.35M11 6a5 5 0 0 1 5 5m3 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    />
  </svg>
);
export default SvgSearchRefraction;
