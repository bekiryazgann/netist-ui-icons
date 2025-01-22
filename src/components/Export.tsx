import * as React from "react";
import type { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.75 12.75a.75.75 0 0 1-1.5 0V6.06L7.53 7.78a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72z" />
    <path d="M16.5 13.75a.75.75 0 0 0-1.5 0v.76a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-.76a.75.75 0 0 0-1.5 0v.76a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25z" />
  </svg>
);
export default SvgExport;
