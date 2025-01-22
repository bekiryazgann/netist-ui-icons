import * as React from "react";
import type { SVGProps } from "react";
const SvgStatus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.25 4.55A5.501 5.501 0 1 0 15.5 10a.75.75 0 0 1 1.5 0 7 7 0 1 1-7-7 .75.75 0 0 1 .75.75V8.7a1.5 1.5 0 1 1-1.5 0V7.354A2.751 2.751 0 1 0 12.75 10a.75.75 0 0 1 1.5 0 4.25 4.25 0 1 1-5-4.184V4.551Z" />
  </svg>
);
export default SvgStatus;
