import * as React from "react";
import type { SVGProps } from "react";
const SvgBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M13.75 3.5a2.75 2.75 0 0 1 2.75 2.75v1a.75.75 0 0 1-1.5 0v-1C15 5.56 14.44 5 13.75 5h-1a.75.75 0 0 1 0-1.5zM3.5 13.75a2.75 2.75 0 0 0 2.75 2.75h1a.75.75 0 0 0 0-1.5h-1C5.56 15 5 14.44 5 13.75v-1a.75.75 0 0 0-1.5 0zM16.5 13.75a2.75 2.75 0 0 1-2.75 2.75h-1a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0zM3.5 6.25A2.75 2.75 0 0 1 6.25 3.5h1a.75.75 0 0 1 0 1.5h-1C5.56 5 5 5.56 5 6.25v1a.75.75 0 0 1-1.5 0z" />
    <path
      fillRule="evenodd"
      d="M8.25 6.5A1.75 1.75 0 0 0 6.5 8.25v3.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75v-3.5a1.75 1.75 0 0 0-1.75-1.75zM8 8.25A.25.25 0 0 1 8.25 8h3.5a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25z"
    />
  </svg>
);
export default SvgBlank;
