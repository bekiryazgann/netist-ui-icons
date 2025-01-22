import * as React from "react";
import type { SVGProps } from "react";
const SvgThermometer02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 4.5a2.5 2.5 0 0 0-5 0v9.258a4.5 4.5 0 1 0 5 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgThermometer02;
