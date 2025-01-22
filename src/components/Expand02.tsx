import * as React from "react";
import type { SVGProps } from "react";
const SvgExpand02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6"
    />
  </svg>
);
export default SvgExpand02;
