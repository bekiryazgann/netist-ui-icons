import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 10 6M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fillRule="evenodd"
      d="M3.5 8.25A4.75 4.75 0 0 1 8.25 3.5h3.5a4.75 4.75 0 0 1 4.75 4.75v2.5a4.75 4.75 0 0 1-4.573 4.747l-1.335 1.714a.75.75 0 0 1-1.189-.006l-1.3-1.707A4.75 4.75 0 0 1 3.5 10.75zM8.25 5A3.25 3.25 0 0 0 5 8.25v2.5A3.25 3.25 0 0 0 8.25 14h.226a.75.75 0 0 1 .597.296l.934 1.225.96-1.232a.75.75 0 0 1 .591-.289h.192A3.25 3.25 0 0 0 15 10.75v-2.5A3.25 3.25 0 0 0 11.75 5z"
    />
  </svg>
);
export default SvgAlertBubble;
