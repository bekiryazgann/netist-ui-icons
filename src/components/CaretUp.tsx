import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.24 11.8a.75.75 0 0 0 1.06-.04L10 8.852l2.7 2.908a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 0 0 .04 1.06"
    />
  </svg>
);
export default SvgCaretUp;
