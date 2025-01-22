import * as React from "react";
import type { SVGProps } from "react";
const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M9.116 4.323a1.25 1.25 0 0 1 1.768 0L13.53 6.97a.75.75 0 0 1-1.06 1.06L10 5.56 7.53 8.03a.75.75 0 1 1-1.06-1.06z"
    />
    <path
      fillOpacity={0.33}
      fillRule="evenodd"
      d="M9.116 15.677a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06L10 14.44l-2.47-2.47a.75.75 0 0 0-1.06 1.06z"
    />
  </svg>
);
export default SvgSortAscending;
