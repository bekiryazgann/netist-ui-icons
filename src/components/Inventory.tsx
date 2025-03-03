import * as React from "react";
import type { SVGProps } from "react";
const SvgInventory = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.265 2.952a2.25 2.25 0 0 0-2.53 0L4.641 5.735A3.75 3.75 0 0 0 3 8.836v7.413a.75.75 0 0 0 1.5 0V8.836c0-.745.369-1.441.985-1.86l4.093-2.784a.75.75 0 0 1 .844 0l4.093 2.784a2.25 2.25 0 0 1 .985 1.86v7.413a.75.75 0 0 0 1.5 0V8.836a3.75 3.75 0 0 0-1.641-3.1z" />
    <path
      fillRule="evenodd"
      d="M10 16.968a1 1 0 0 1-.25.031h-3a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h.75v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3h.75a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-.25-.031m.75-3.969v2.5h2v-2.5zm-1.5 2.5v-2.5h-2v2.5zm1.75-4v-2.5H9v2.5z"
    />
  </svg>
);
export default SvgInventory;
