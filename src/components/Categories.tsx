import * as React from "react";
import type { SVGProps } from "react";
const SvgCategories = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.25 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM5 6.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 6.5" />
    <path
      fillRule="evenodd"
      d="M3.5 10.75A2.75 2.75 0 0 1 6.25 8h7.5a2.75 2.75 0 0 1 2.75 2.75v3a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75zM6.25 9.5c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
);
export default SvgCategories;
