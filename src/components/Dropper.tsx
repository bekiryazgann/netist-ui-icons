import * as React from "react";
import type { SVGProps } from "react";
const SvgDropper = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.5 6.5 7 7M2 22s4.5-.5 7-3L21 7a2.828 2.828 0 1 0-4-4L5 15c-2.5 2.5-3 7-3 7"
    />
  </svg>
);
export default SvgDropper;
