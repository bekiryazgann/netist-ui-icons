import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1.5H8.5a3.5 3.5 0 1 0 0 7m3.5-7v7m0-7h3.5a3.5 3.5 0 1 1 0 7m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0V19a3.5 3.5 0 1 1-3.5-3.5m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
    />
  </svg>
);
export default SvgFigma;
