import * as React from "react";
import type { SVGProps } from "react";
const SvgTextGrammar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.695 3.717a.75.75 0 0 0-1.39 0l-2.75 6.75a.75.75 0 0 0 1.39.566L5.569 9.5H8.25q.09 0 .173-.02l.632 1.553a.75.75 0 1 0 1.39-.566zM7 5.987 7.82 8H6.18z"
    />
    <path d="M3.5 13.25a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" />
    <path
      fillRule="evenodd"
      d="M13.5 5.5c.574 0 1.11.161 1.566.44a.75.75 0 0 1 1.434.31v4.5a.75.75 0 0 1-1.434.31A3 3 0 1 1 13.5 5.5m1.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
    <path d="M17.78 14.28a.75.75 0 1 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0z" />
  </svg>
);
export default SvgTextGrammar;
