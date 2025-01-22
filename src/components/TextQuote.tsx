import * as React from "react";
import type { SVGProps } from "react";
const SvgTextQuote = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.75 4a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM11 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M3.75 11a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM3 8.75a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.5v-1a.25.25 0 0 1 .25-.25.75.75 0 0 0 0-1.5A1.75 1.75 0 0 0 3 5.75zm5.5-2v-1a.25.25 0 0 1 .25-.25.75.75 0 0 0 0-1.5A1.75 1.75 0 0 0 7 5.75v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgTextQuote;
