import * as React from "react";
import type { SVGProps } from "react";
const SvgDockSide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M11 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" />
    <path
      fillRule="evenodd"
      d="M7.25 3.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75zM5 7.25A2.25 2.25 0 0 1 7.25 5h5.5A2.25 2.25 0 0 1 15 7.25v5.5A2.25 2.25 0 0 1 12.75 15h-5.5A2.25 2.25 0 0 1 5 12.75z"
    />
  </svg>
);
export default SvgDockSide;
