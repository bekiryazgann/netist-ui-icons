import * as React from "react";
import type { SVGProps } from "react";
const SvgUnknownDevice = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.6.6 0 0 0-.226.147.2.2 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586A1.25 1.25 0 0 0 10 7.25m.75 4.003v.002z"
    />
    <path d="M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fillRule="evenodd"
      d="M4 5.75A2.75 2.75 0 0 1 6.75 3h6.5A2.75 2.75 0 0 1 16 5.75v8.5A2.75 2.75 0 0 1 13.25 17h-6.5A2.75 2.75 0 0 1 4 14.25zM6.75 4.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25z"
    />
  </svg>
);
export default SvgUnknownDevice;
