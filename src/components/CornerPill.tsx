import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerPill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.25 5A7.25 7.25 0 0 0 5 12.25v3.5a.75.75 0 0 1-1.5 0v-3.5a8.75 8.75 0 0 1 8.75-8.75h3.5a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);
export default SvgCornerPill;
