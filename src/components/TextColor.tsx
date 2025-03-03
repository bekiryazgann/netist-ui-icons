import * as React from "react";
import type { SVGProps } from "react";
const SvgTextColor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 3a.75.75 0 0 1 .686.447l4.2 9.5a.75.75 0 1 1-1.372.606l-1.35-3.053H7.836l-1.35 3.053a.75.75 0 0 1-1.372-.606l4.2-9.5A.75.75 0 0 1 10 3M8.5 9h3L10 5.605z"
    />
    <path d="M3.075 16.25a.75.75 0 0 1 .75-.75h12.35a.75.75 0 0 1 0 1.5H3.825a.75.75 0 0 1-.75-.75" />
  </svg>
);
export default SvgTextColor;
