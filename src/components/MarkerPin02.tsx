import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkerPin02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22c2-4 8-6.582 8-12a8 8 0 1 0-16 0c0 5.418 6 8 8 12"
    />
  </svg>
);
export default SvgMarkerPin02;
