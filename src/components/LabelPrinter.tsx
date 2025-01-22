import * as React from "react";
import type { SVGProps } from "react";
const SvgLabelPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M14 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.75 5.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM8.5 13.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M9.25 10.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M14 13.989v.511a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-.511a2.75 2.75 0 0 1-2.5-2.739v-5A2.75 2.75 0 0 1 6.25 3.5h7.5a2.75 2.75 0 0 1 2.75 2.75v5a2.75 2.75 0 0 1-2.5 2.739M6.25 5C5.56 5 5 5.56 5 6.25v5c0 .605.43 1.11 1 1.225V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.475c.57-.116 1-.62 1-1.225v-5C15 5.56 14.44 5 13.75 5zM8 9.5h4a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .5-.5"
    />
  </svg>
);
export default SvgLabelPrinter;
