import * as React from "react";
import type { SVGProps } from "react";
const SvgCashYen = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.436 6.506a.75.75 0 0 1 1.058-.07L10 7.753l1.506-1.317a.75.75 0 0 1 .988 1.128L10.75 9.09v.41H12a.75.75 0 0 1 0 1.5h-1.25v.5H12a.75.75 0 0 1 0 1.5h-1.25v.5a.75.75 0 0 1-1.5 0V13H8a.75.75 0 0 1 0-1.5h1.25V11H8a.75.75 0 0 1 0-1.5h1.25v-.41L7.506 7.564a.75.75 0 0 1-.07-1.058" />
    <path
      fillRule="evenodd"
      d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
    />
  </svg>
);
export default SvgCashYen;
