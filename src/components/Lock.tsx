import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.75 13.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 0 0 1.5 0z" />
    <path
      fillRule="evenodd"
      d="M6.25 7.095V6.75a3.75 3.75 0 1 1 7.5 0v.345A3 3 0 0 1 16 10v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.25-2.905m1.5-.345a2.25 2.25 0 0 1 4.5 0V7h-4.5zM5.5 10A1.5 1.5 0 0 1 7 8.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 14z"
    />
  </svg>
);
export default SvgLock;
