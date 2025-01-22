import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      fillRule="evenodd"
      d="M10 3a3.25 3.25 0 0 0-3.25 3.25v2a3.25 3.25 0 0 0 6.5 0v-2A3.25 3.25 0 0 0 10 3m1.75 5.25a1.75 1.75 0 1 1-3.5 0v-2a1.75 1.75 0 1 1 3.5 0z"
    />
    <path d="M5.5 8A.75.75 0 0 0 4 8v.25c0 3.06 2.29 5.585 5.25 5.954v1.546H8a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1.546A6 6 0 0 0 16 8.25V8a.75.75 0 0 0-1.5 0v.25a4.5 4.5 0 1 1-9 0z" />
  </svg>
);
export default SvgMicrophone;
