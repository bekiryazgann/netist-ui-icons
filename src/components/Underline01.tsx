import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 4v7a6 6 0 0 1-12 0V4M4 21h16"
    />
  </svg>
);
export default SvgUnderline01;
