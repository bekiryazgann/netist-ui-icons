import * as React from "react";
import type { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7.75 13.75A.75.75 0 0 1 8.5 13h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" />
    <path
      fillRule="evenodd"
      d="M4.75 5.75A2.75 2.75 0 0 1 7.5 3h5a2.75 2.75 0 0 1 2.75 2.75v8.5A2.75 2.75 0 0 1 12.5 17h-5a2.75 2.75 0 0 1-2.75-2.75zM7.5 4.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25h-.531a1 1 0 0 1-.969.75H9a1 1 0 0 1-.969-.75z"
    />
  </svg>
);
export default SvgMobile;
