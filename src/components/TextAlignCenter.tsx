import * as React from "react";
import type { SVGProps } from "react";
const SvgTextAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4.75A.75.75 0 0 1 3.75 4h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75m2.25 3.5A.75.75 0 0 1 6 7.5h8A.75.75 0 0 1 14 9H6a.75.75 0 0 1-.75-.75M3 11.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m2.25 3.5A.75.75 0 0 1 6 14.5h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgTextAlignCenter;
