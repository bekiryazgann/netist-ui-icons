import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircleBroken = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
    />
  </svg>
);
export default SvgCheckCircleBroken;
