import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.74-8-4.584 0-4.584 8 0 8 5.607 0 7.645-8 12.74-8"
    />
  </svg>
);
export default SvgInfinity;
