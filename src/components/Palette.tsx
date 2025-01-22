import * as React from "react";
import type { SVGProps } from "react";
const SvgPalette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 12c0 5.523 4.477 10 10 10a3 3 0 0 0 3-3v-.5c0-.464 0-.697.026-.892a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.892-.026h.5a3 3 0 0 0 3-3c0-5.523-4.477-10-10-10S2 6.477 2 12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgPalette;
