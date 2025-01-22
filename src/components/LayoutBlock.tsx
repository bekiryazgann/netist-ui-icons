import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutBlock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 6.25C5 5.56 5.56 5 6.25 5h2a.75.75 0 0 0 0-1.5h-2A2.75 2.75 0 0 0 3.5 6.25v2a.75.75 0 0 0 1.5 0zM13.75 5c.69 0 1.25.56 1.25 1.25v2a.75.75 0 0 0 1.5 0v-2a2.75 2.75 0 0 0-2.75-2.75h-2a.75.75 0 0 0 0 1.5zm0 10c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75h-2a.75.75 0 0 1 0-1.5zm-7.5 0C5.56 15 5 14.44 5 13.75v-2a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h2a.75.75 0 0 0 0-1.5z" />
  </svg>
);
export default SvgLayoutBlock;
