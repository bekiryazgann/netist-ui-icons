import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.75 9.5a.75.75 0 0 0 0-1.5h-.69l3.22-3.22a.75.75 0 0 0-1.06-1.06L12 6.94v-.69a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75zm-7.5 1a.75.75 0 0 0 0 1.5h.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06L8 13.06v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75z" />
  </svg>
);
export default SvgMinimize;
