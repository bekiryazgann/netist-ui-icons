import * as React from "react";
import type { SVGProps } from "react";
const SvgTextTitle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 4.75A.75.75 0 0 1 4.75 4h10.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5.5H11v8.75h1.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5H9V5.5H5.5v.75a.75.75 0 0 1-1.5 0z" />
  </svg>
);
export default SvgTextTitle;
