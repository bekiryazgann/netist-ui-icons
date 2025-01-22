import * as React from "react";
import type { SVGProps } from "react";
const SvgIq = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.5 5.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      fillRule="evenodd"
      d="M10.128 12.5H8A4.5 4.5 0 0 1 3.5 8v-.25A4.25 4.25 0 0 1 7.75 3.5h4a.75.75 0 0 1 0 1.5h-4A2.75 2.75 0 0 0 5 7.75V8a3 3 0 0 0 3 3h2.128a2.251 2.251 0 1 1 0 1.5m1.372-.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
    />
    <path
      fillRule="evenodd"
      d="M12.25 16.25a4.5 4.5 0 1 0 0-9h-2.128a2.251 2.251 0 1 0 0 1.5h2.128a3 3 0 1 1 0 6H8.5a.75.75 0 0 0 0 1.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
    />
    <path d="M6.75 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgIq;
