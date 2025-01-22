import * as React from "react";
import type { SVGProps } from "react";
const SvgPayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10 4.5a5.5 5.5 0 0 0-4.883 8.034.75.75 0 0 1-1.33.692 7 7 0 1 1 12.427 0 .752.752 0 0 1-1.332-.692A5.5 5.5 0 0 0 10 4.5M16.5 15.5a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5z" />
    <path d="M10 6.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 12.25 10a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 10 6.25" />
  </svg>
);
export default SvgPayout;
