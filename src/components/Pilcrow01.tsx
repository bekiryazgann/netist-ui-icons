import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrow01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4v16m0-16h2m-2 0h-5.5a4.5 4.5 0 0 0 0 9H16zm-2 16h4"
    />
  </svg>
);
export default SvgPilcrow01;
