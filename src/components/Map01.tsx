import * as React from "react";
import type { SVGProps } from "react";
const SvgMap01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 18-7 4V6l7-4m0 16 7 4m-7-4V2m7 20 6-4V2l-6 4m0 16V6m0 0L9 2"
    />
  </svg>
);
export default SvgMap01;
