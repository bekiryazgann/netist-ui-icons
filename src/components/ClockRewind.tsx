import * as React from "react";
import type { SVGProps } from "react";
const SvgClockRewind = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.7 13.5-2-2-2 2M21 12a9 9 0 1 1-1.245-4.57M12 7v5l3 2"
    />
  </svg>
);
export default SvgClockRewind;
