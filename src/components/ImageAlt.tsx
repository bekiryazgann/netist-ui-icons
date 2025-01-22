import * as React from "react";
import type { SVGProps } from "react";
const SvgImageAlt = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M6.678 6.929a.75.75 0 0 0-1.356 0l-2.25 4.75a.75.75 0 0 0 1.356.642l.389-.821h2.366l.39.821a.75.75 0 0 0 1.355-.642zM6.473 10 6 9.002 5.527 10z"
    />
    <path d="M10.25 6.75a.75.75 0 0 1 .75.75v3.75h1.5a.75.75 0 0 1 0 1.5h-2.25A.75.75 0 0 1 9.5 12V7.5a.75.75 0 0 1 .75-.75m2.75 0a.75.75 0 0 0 0 1.5h1V12a.75.75 0 0 0 1.5 0V8.25h1a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgImageAlt;
