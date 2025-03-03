import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9.636 3.191a.75.75 0 0 1 .104.787 5.5 5.5 0 0 0 6.28 7.625.75.75 0 0 1 .856 1.04 7.001 7.001 0 1 1-7.992-9.705.75.75 0 0 1 .752.253M7.877 4.914a5.5 5.5 0 1 0 6.866 8.336 7 7 0 0 1-6.866-8.336" />
  </svg>
);
export default SvgMoon;
