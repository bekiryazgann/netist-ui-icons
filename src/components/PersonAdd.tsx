import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonAdd = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16.25 2.75a.75.75 0 0 0-1.5 0v1h-1a.75.75 0 0 0 0 1.5h1v1a.75.75 0 0 0 1.5 0v-1h1a.75.75 0 0 0 0-1.5h-1z" />
    <path
      fillRule="evenodd"
      d="M9 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M7 6.5a2 2 0 1 1 3.999-.001A2 2 0 0 1 7 6.5M9 11a6.27 6.27 0 0 0-5.484 3.227l-.437.786A1.338 1.338 0 0 0 4.249 17h9.502a1.338 1.338 0 0 0 1.17-1.987l-.437-.786A6.27 6.27 0 0 0 9 11m-4.173 3.955a4.775 4.775 0 0 1 8.346 0l.302.545h-8.95z"
    />
  </svg>
);
export default SvgPersonAdd;
