import * as React from "react";
import type { SVGProps } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16.5 6.26a.75.75 0 0 1-1.5 0v-.51a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v.51a.75.75 0 0 1-1.5 0v-.51A2.25 2.25 0 0 1 5.75 3.5h8.5a2.25 2.25 0 0 1 2.25 2.25z" />
    <path d="M10.75 7.51a.75.75 0 0 0-1.5 0v6.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72z" />
  </svg>
);
export default SvgSave;
