import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.344 3.692a2.25 2.25 0 0 1 3.312 0l3.854 4.19a3.75 3.75 0 0 1 .99 2.538v3.33a2.75 2.75 0 0 1-2.75 2.75H12a1.5 1.5 0 0 1-1.5-1.5v-2h-1v2A1.5 1.5 0 0 1 8 16.5H6.25a2.75 2.75 0 0 1-2.75-2.75v-3.33c0-.94.353-1.847.99-2.539zm2.208 1.016a.75.75 0 0 0-1.104 0L5.594 8.897A2.25 2.25 0 0 0 5 10.42v3.33c0 .69.56 1.25 1.25 1.25H8v-2a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 12 13v2h1.75c.69 0 1.25-.56 1.25-1.25v-3.33a2.25 2.25 0 0 0-.594-1.523l-3.854-4.19Z"
    />
  </svg>
);
export default SvgHome;
