import * as React from "react";
import type { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path d="M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5A.75.75 0 0 1 10 14M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    <path
      fillRule="evenodd"
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
);
export default SvgInfo;
