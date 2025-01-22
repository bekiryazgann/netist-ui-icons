import * as React from "react";
import type { SVGProps } from "react";
const SvgExternalSmall = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.75 4.5a.75.75 0 0 0 0 1.5h1.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06L14 7.06v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z" />
    <path d="M15 11.25a.75.75 0 0 0-1.5 0v1c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h1a.75.75 0 0 0 0-1.5h-1A2.75 2.75 0 0 0 5 7.75v4.5A2.75 2.75 0 0 0 7.75 15h4.5A2.75 2.75 0 0 0 15 12.25z" />
  </svg>
);
export default SvgExternalSmall;
