import * as React from "react";
import type { SVGProps } from "react";
const SvgSliders01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 21v-7m0-4V3m7 18v-9m0-4V3m7 18v-5m0-4V3M2 14h6m1-6h6m1 8h6"
    />
  </svg>
);
export default SvgSliders01;
