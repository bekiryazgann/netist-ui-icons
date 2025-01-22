import * as React from "react";
import type { SVGProps } from "react";
const SvgSmileyNeutral = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.5 11.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 7.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zM8.5 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 8.5 7" />
    <path
      fillRule="evenodd"
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    />
  </svg>
);
export default SvgSmileyNeutral;
