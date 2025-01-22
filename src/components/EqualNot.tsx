import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualNot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9h14M5 15h14m0-10L5 19"
    />
  </svg>
);
export default SvgEqualNot;
