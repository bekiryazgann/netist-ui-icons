import * as React from "react";
import type { SVGProps } from "react";
const SvgButton = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6.75 4A3.75 3.75 0 0 0 3 7.75v2.5A3.75 3.75 0 0 0 6.75 14h1.5a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-2.25-2.25v-2.5A2.25 2.25 0 0 1 6.75 5.5h6.5a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5A3.75 3.75 0 0 0 13.25 4z" />
    <path d="M9.464 8.464a.75.75 0 0 1 .78-.176l6.01 2.12a.75.75 0 0 1 .281 1.238l-1.237 1.238 1.414 1.414a.75.75 0 0 1 0 1.06l-.353.354a.75.75 0 0 1-1.06 0l-1.415-1.414-1.238 1.238a.75.75 0 0 1-1.237-.281l-2.121-6.01a.75.75 0 0 1 .176-.78Z" />
  </svg>
);
export default SvgButton;
