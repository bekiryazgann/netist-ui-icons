import * as React from "react";
import type { SVGProps } from "react";
const SvgColors = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20.472a6 6 0 1 0 5.58-10.262m-11.16 0a6 6 0 1 0 7.16 3.58M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"
    />
  </svg>
);
export default SvgColors;
