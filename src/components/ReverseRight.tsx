import * as React from "react";
import type { SVGProps } from "react";
const SvgReverseRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 7H10a6 6 0 1 0 0 12h10m0-12-4-4m4 4-4 4"
    />
  </svg>
);
export default SvgReverseRight;
