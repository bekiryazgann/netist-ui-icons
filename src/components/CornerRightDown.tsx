import * as React from "react";
import type { SVGProps } from "react";
const SvgCornerRightDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    strokeWidth={0.2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h3.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C16 8.56 16 10.24 16 13.6V20m0 0-5-5m5 5 5-5"
    />
  </svg>
);
export default SvgCornerRightDown;
