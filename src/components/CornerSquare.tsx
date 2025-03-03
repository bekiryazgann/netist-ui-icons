import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M5.25 5a.25.25 0 0 0-.25.25v10.5a.75.75 0 0 1-1.5 0V5.25c0-.966.784-1.75 1.75-1.75h10.5a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);
export default SvgCornerSquare;
