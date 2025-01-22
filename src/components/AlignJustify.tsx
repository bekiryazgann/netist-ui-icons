import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignJustify = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10H3m18 8H3M21 6H3m18 8H3"
    />
  </svg>
);
export default SvgAlignJustify;
