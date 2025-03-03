import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 4v1.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C8.56 15 10.24 15 13.6 15H20m0 0-5-5m5 5-5 5"
    />
  </svg>
);
export default SvgCornerDownRight;
