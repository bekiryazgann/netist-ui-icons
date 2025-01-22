import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8.5 13a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M6.75 3A2.75 2.75 0 0 0 4 5.75v8.5A2.75 2.75 0 0 0 6.75 17h6.5A2.75 2.75 0 0 0 16 14.25v-8.5A2.75 2.75 0 0 0 13.25 3zM5.5 5.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25z"
    />
  </svg>
);
export default SvgTablet;
