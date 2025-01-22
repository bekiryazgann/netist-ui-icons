import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.228 14.772a.78.78 0 0 1 0-1.101l7.113-7.114H8.348a.778.778 0 1 1 0-1.557h5.873c.207 0 .405.082.55.228a.78.78 0 0 1 .229.55v5.874a.78.78 0 1 1-1.558-.001V7.659l-7.113 7.113a.777.777 0 0 1-1.1 0Z"
    />
  </svg>
);
export default SvgArrowDiagonal;
