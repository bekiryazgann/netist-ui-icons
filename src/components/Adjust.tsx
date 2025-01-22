import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjust = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.095 6.25a3.001 3.001 0 0 1 5.81 0h1.345a.75.75 0 0 1 0 1.5h-1.345a3.001 3.001 0 0 1-5.81 0H3.75a.75.75 0 0 1 0-1.5zM10.5 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M8 16a3 3 0 0 0 2.905-2.25h5.345a.75.75 0 0 0 0-1.5h-5.345a3.001 3.001 0 0 0-5.81 0H3.75a.75.75 0 0 0 0 1.5h1.345A3 3 0 0 0 8 16m1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default SvgAdjust;
