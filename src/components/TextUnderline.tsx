import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.25 3.75a.75.75 0 0 0-1.5 0v6a4.25 4.25 0 0 0 8.5 0v-6a.75.75 0 0 0-1.5 0v6a2.75 2.75 0 1 1-5.5 0zM4.75 15.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgTextUnderline;
