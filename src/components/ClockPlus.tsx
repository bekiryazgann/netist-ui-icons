import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.92 13.265Q22 12.643 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.653 0 1.285-.082M12 6v6l3.738 1.87M19 22v-6m-3 3h6"
    />
  </svg>
);
export default SvgClockPlus;
