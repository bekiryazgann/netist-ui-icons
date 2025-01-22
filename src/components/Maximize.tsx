import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.75 3.5a.75.75 0 0 0 0 1.5h1.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06L15 6.06v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75zm-5.5 13a.75.75 0 0 0 0-1.5H6.06l3.22-3.22a.75.75 0 1 0-1.06-1.06L5 13.94v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75z" />
  </svg>
);
export default SvgMaximize;
