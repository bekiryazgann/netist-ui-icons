import * as React from "react";
import type { SVGProps } from "react";
const SvgExternal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M11.75 3.5a.75.75 0 0 0 0 1.5h2.19L8.97 9.97a.75.75 0 1 0 1.06 1.06L15 6.06v2.19a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75z" />
    <path d="M15 10.967a.75.75 0 0 0-1.5 0v2.783c0 .69-.56 1.25-1.25 1.25h-6C5.56 15 5 14.44 5 13.75v-6c0-.69.56-1.25 1.25-1.25h2.783a.75.75 0 0 0 0-1.5H6.25A2.75 2.75 0 0 0 3.5 7.75v6a2.75 2.75 0 0 0 2.75 2.75h6A2.75 2.75 0 0 0 15 13.75z" />
  </svg>
);
export default SvgExternal;
