import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M15.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m1.5 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-3.5.75a.75.75 0 0 0 0-1.5H8.31l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06l-1.22-1.22z"
    />
  </svg>
);
export default SvgCircleLeft;
