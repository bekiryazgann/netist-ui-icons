import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fillRule="evenodd"
      d="M8 4.5a5.5 5.5 0 1 0 0 11h4a5.5 5.5 0 1 0 0-11zM4 10a4 4 0 0 1 4-4h4a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4"
    />
  </svg>
);
export default SvgToggleOff;
