import * as React from "react";
import type { SVGProps } from "react";
const SvgListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.25 4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM6.5 10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 6.5 10M7.25 14.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgListBulleted;
