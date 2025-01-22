import * as React from "react";
import type { SVGProps } from "react";
const SvgImport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M10.75 4.25a.75.75 0 0 0-1.5 0v6.69L7.53 9.22a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72z" />
    <path d="M16.5 13.75a.75.75 0 0 0-1.5 0v.8a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.8a.75.75 0 0 0-1.5 0v.8a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25z" />
  </svg>
);
export default SvgImport;
