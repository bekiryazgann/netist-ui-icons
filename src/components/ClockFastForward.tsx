import * as React from "react";
import type { SVGProps } from "react";
const SvgClockFastForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.7 11.5-2 2-2-2m2.245 1.5q.055-.492.055-1a9 9 0 1 0-2 5.657M12 7v5l3 2"
    />
  </svg>
);
export default SvgClockFastForward;
