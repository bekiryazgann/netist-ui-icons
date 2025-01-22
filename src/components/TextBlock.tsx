import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBlock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.25 6.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM6.5 10a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 6.5 10m.75 2a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M7.25 3.5A3.75 3.75 0 0 0 3.5 7.25v5.5a3.75 3.75 0 0 0 3.75 3.75h5.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a3.75 3.75 0 0 0-3.75-3.75zM5 7.25A2.25 2.25 0 0 1 7.25 5h5.5A2.25 2.25 0 0 1 15 7.25v5.5A2.25 2.25 0 0 1 12.75 15h-5.5A2.25 2.25 0 0 1 5 12.75z"
    />
  </svg>
);
export default SvgTextBlock;
