import * as React from "react";
import type { SVGProps } from "react";
const SvgSortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillOpacity={0.33}
      fillRule="evenodd"
      d="M9.116 4.823a1.25 1.25 0 0 1 1.768 0L13.53 7.47a.75.75 0 0 1-1.06 1.06L10 6.06 7.53 8.53a.75.75 0 1 1-1.06-1.06z"
    />
    <path
      fillRule="evenodd"
      d="M9.116 15.177a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06L10 13.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06z"
    />
  </svg>
);
export default SvgSortDescending;
