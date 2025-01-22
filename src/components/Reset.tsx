import * as React from "react";
import type { SVGProps } from "react";
const SvgReset = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 9.25a.75.75 0 0 1-1.5 0 3 3 0 0 0-3-3H5.934l1.123 1.248a.75.75 0 1 1-1.114 1.004l-2.25-2.5A.75.75 0 0 1 3.72 4.97l2.25-2.25a.75.75 0 0 1 1.06 1.06l-.97.97h6.44a4.5 4.5 0 0 1 4.5 4.5m-14 1.5a.75.75 0 0 1 1.5 0 3 3 0 0 0 3 3h6.566l-1.123-1.248a.75.75 0 1 1 1.114-1.004l2.25 2.5a.75.75 0 0 1-.027 1.032l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H7.5a4.5 4.5 0 0 1-4.5-4.5" />
  </svg>
);
export default SvgReset;
