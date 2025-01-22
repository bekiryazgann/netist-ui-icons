import * as React from "react";
import type { SVGProps } from "react";
const SvgFileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.25 3h-3A1.75 1.75 0 0 0 4.5 4.75v10.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75V9.205h-4.62a1.625 1.625 0 0 1-1.626-1.624zM7.025 14c0-.483.392-.875.875-.875h4.2a.875.875 0 0 1 0 1.75H7.9A.875.875 0 0 1 7.025 14"
    />
    <path d="M15.214 7.955h-4.335a.375.375 0 0 1-.375-.375l-.003-4.322q.175.108.322.255l4.164 4.164q.13.128.227.278" />
  </svg>
);
export default SvgFileFilled;
